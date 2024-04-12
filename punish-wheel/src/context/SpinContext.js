import { createContext, useReducer } from "react";

export const SpinsContext = createContext();

export const spinsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SPINS":
      return {
        spins: action.payload,
      };
    case "CREATE_SPIN":
      return {
        spins: [action.payload, ...state.spins],
      };
    case "DELETE_SPIN":
      return {
        spins: state.spins.filter((spin) => spin._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const SpinsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(spinsReducer, { spins: null });

  return (
    <SpinsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SpinsContext.Provider>
  );
};
