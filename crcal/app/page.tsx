"use client";

import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState({
    sex: "female",
    age: "20",
    weightUnit: "kg",
    weight: "45",
    crUnit: "umol",
    crLvl: "100",
  });

  return (
    <main className="flex flex-col justify-center items-center gap-4">
      <div className="w-64 mt-10 mb-5 text-center border-solid border-4 border-black p-3 text-2xl font-bold">
        CrCal
      </div>
      <div className="flex flex-col w-96">
        <label htmlFor="sex-selector">Sex</label>
        <div id="sex-selector" className="flex mb-4">
          <button
            className="border-r-0 border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, sex: "male" })}
          >
            Male
          </button>
          <button
            className="border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, sex: "female" })}
          >
            Female
          </button>
        </div>
        <label htmlFor="age-input">Age</label>
        <input
          id="age-input"
          type="text"
          className={`text-lg focus:outline-none p-1 w-full border-2 border-black mb-4`}
          onChange={(e) => setInfo({ ...info, age: e.target.value })}
          value={info.age}
        />
        <label htmlFor="weight-input">Weight</label>
        <div id="weight-input" className="flex mb-4">
          <input
            type="text"
            className={`text-lg focus:outline-none p-1 w-full border-2 border-black`}
            value={info.weight}
            onChange={(e) => setInfo({ ...info, weight: e.target.value })}
          />
          <button
            className="border-x-0 border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, weightUnit: "kg" })}
          >
            kg
          </button>
          <button
            className="border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, weightUnit: "lbs" })}
          >
            lbs
          </button>
        </div>
        <label htmlFor="cr-input">Serum Creatinine</label>
        <div id="cr-input" className="flex mb-8">
          <input
            type="text"
            className={`text-lg focus:outline-none p-1 w-full border-2 border-black`}
            value={info.crLvl}
            onChange={(e) =>
              setInfo({
                ...info,
                crLvl: e.target.value,
              })
            }
          />
          <button
            className="border-x-0 border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, crUnit: "umol" })}
          >
            umol/L
          </button>
          <button
            className="border-2 border-black p-2 hover:bg-gray-300"
            onClick={() => setInfo({ ...info, crUnit: "mg" })}
          >
            mg/dL
          </button>
        </div>
        <button className="border-2 border-black w-1/2 self-center py-1 hover:bg-gray-300">
          Calculate
        </button>
        <div>
          {info.sex} {info.age} {info.weight} {info.crLvl} {info.weightUnit}{" "}
          {info.crUnit}
        </div>
        <div></div>
      </div>
    </main>
  );
}
