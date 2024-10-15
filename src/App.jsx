import React, { useState } from "react";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(85);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-24"></div>
      <h1 className="text-3xl underline text-center mb-8">BB Company</h1>
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Today lucky number is</h1>
        <div className="text-black text-3xl mb-24 text-center w-full">
          {randomNumber}
        </div>
        <button
          className="bg-red-500 px-4 py-2 text-white rounded"
          onClick={generateRandomNumber}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default App;
