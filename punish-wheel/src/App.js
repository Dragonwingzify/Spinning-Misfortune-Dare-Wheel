import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "10 push ups", backgroundColor: "red" },
  { option: "10 sit ups", backgroundColor: "green" },
  { option: "Drink water", backgroundColor: "red" },
  { option: "End stream", backgroundColor: "green" },
  { option: "Spin again", backgroundColor: "red" },
  { option: "Nothing", backgroundColor: "green" },
];

export default function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-3/4 sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSpinClick}
        >
          SPIN
        </button>
      </div>
    </div>
  );
}
