import { Wheel } from "react-custom-roulette";
import React, { useEffect, useState } from "react";
import SpinDetails from "../components/spinDetails";
import { useSpinsContext } from "../hooks/useSpinsContext";

export default function WheelSpinner() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedSpin, setSelectedSpin] = useState(null);
  const [data, setData] = useState(null);

  const { spins, dispatch } = useSpinsContext();

  useEffect(() => {
    const fetchSpins = async () => {
      const response = await fetch("/api/spins");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_SPINS", payload: json });
      }
    };
    fetchSpins();
  }, [dispatch]);

  const handleSpinClick = () => {
    if (!mustSpin && data) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setSelectedSpin(data[newPrizeNumber]);
      console.log("data ", data);
    }
  };

  const updateSpinCount = async () => {
    const response = await fetch(`/api/spins/${selectedSpin.id}`, {
      method: "PATCH",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_COUNT", payload: json });
      console.log("updated count into db");
    } else {
      console.log("Failed to update spin count", selectedSpin);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    if (selectedSpin) {
      updateSpinCount();
    }
  };

  useEffect(() => {
    if (spins) {
      const mappedData = spins.map((item) => ({
        id: item._id,
        option: item.title,
        backgroundColor: "red",
      }));
      setData(mappedData);
      console.log(mappedData);
    }
  }, [spins]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-3/4 sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center">
        {data && (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            onStopSpinning={handleStopSpinning}
          />
        )}
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSpinClick}
        >
          SPIN
        </button>
        {/* {selectedSpin && <SpinDetails data={selectedSpin} />} */}
      </div>
    </div>
  );
}
