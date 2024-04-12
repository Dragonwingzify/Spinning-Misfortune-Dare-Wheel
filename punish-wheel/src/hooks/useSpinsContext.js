import { SpinsContext } from "../context/SpinContext";
import { useContext } from "react";

export const useSpinsContext = () => {
  const context = useContext(SpinsContext);

  if (!context) {
    throw Error("useSpinContext must be used inside an SpinsContextProvider");
  }
  return context;
};
