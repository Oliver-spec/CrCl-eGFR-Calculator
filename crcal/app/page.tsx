"use client";

import { useState } from "react";
import calculate from "./calculate";
import clsx from "clsx";

export default function Home() {
  const [info, setInfo] = useState({
    sex: "female",
    age: "20",
    weightUnit: "kg",
    weight: "45",
    crUnit: "umol",
    crLvl: "1",
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
            className={clsx(
              "border-r-0 border-2 border-black p-2 hover:bg-gray-300",
              {
                "bg-gray-300": info.sex === "male",
              }
            )}
            onClick={() => setInfo({ ...info, sex: "male" })}
          >
            Male
          </button>
          <button
            className={clsx("border-2 border-black p-2 hover:bg-gray-300", {
              "bg-gray-300": info.sex === "female",
            })}
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
            className={clsx(
              "border-x-0 border-2 border-black p-2 hover:bg-gray-300",
              {
                "bg-gray-300": info.weightUnit === "kg",
              }
            )}
            onClick={() => setInfo({ ...info, weightUnit: "kg" })}
          >
            kg
          </button>
          <button
            className={clsx("border-2 border-black p-2 hover:bg-gray-300", {
              "bg-gray-300": info.weightUnit === "lbs",
            })}
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
            className={clsx(
              "border-x-0 border-2 border-black p-2 hover:bg-gray-300",
              {
                "bg-gray-300": info.crUnit === "umol",
              }
            )}
            onClick={() => setInfo({ ...info, crUnit: "umol" })}
          >
            umol/L
          </button>
          <button
            className={clsx("border-2 border-black p-2 hover:bg-gray-300", {
              "bg-gray-300": info.crUnit === "mg",
            })}
            onClick={() => setInfo({ ...info, crUnit: "mg" })}
          >
            mg/dL
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col divide-y-2 divide-black w-1/3">
            <div className="flex gap-1 justify-center">
              <div>(</div>
              <div>140</div>
              <div>-</div>
              <div className="text-pink-400">{info.age}</div>
              <div>)</div>
              <div>x</div>
              <div className="text-pink-400">{info.weight}</div>
            </div>
            <div className="flex gap-1 justify-center">
              <div>72</div>
              <div>x</div>
              <div className="text-pink-400">{info.crLvl}</div>
            </div>
          </div>
          {info.sex === "female" ? (
            <div className="flex flex-col justify-center ml-1">
              <div className="flex gap-1">
                <div>x</div>
                <div>0.85</div>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col justify-center ml-1">
            <div>=</div>
          </div>
          <div className="flex flex-col justify-center ml-1">
            <div className="border-b-2 border-black">{calculate(info)}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
