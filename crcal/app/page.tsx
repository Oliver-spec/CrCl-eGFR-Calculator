"use client";

import { useState } from "react";
import calculate from "./lib/calculate";
import clsx from "clsx";

export default function Home() {
  const [info, setInfo] = useState({
    sex: "female",
    age: "",
    weightUnit: "kg",
    weight: "",
    crUnit: "umol",
    crLvl: "",
  });

  const [hasTyped, setHasTyped] = useState({
    age: false,
    weight: false,
    crLvl: false,
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
          className={clsx(
            `text-lg focus:outline-none p-1 w-full border-2 border-black mb-4`,
            {
              "border-red-600":
                !(
                  info.age &&
                  /^\d+$/.test(info.age) &&
                  Number(info.age) !== 0
                ) && hasTyped.age,
            }
          )}
          onChange={(e) => {
            setHasTyped({ ...hasTyped, age: true });

            if (e.target.value.length <= 3) {
              setInfo({ ...info, age: e.target.value });
            }
          }}
          value={info.age}
        />
        <label htmlFor="weight-input">Weight</label>
        <div id="weight-input" className="flex mb-4">
          <input
            type="text"
            className={clsx(
              `text-lg focus:outline-none p-1 w-full border-2 border-black`,
              {
                "border-red-600":
                  !(
                    info.weight &&
                    /^\d+\.?\d*$/.test(info.weight) &&
                    Number(info.weight) !== 0
                  ) && hasTyped.weight,
              }
            )}
            value={info.weight}
            onChange={(e) => {
              setHasTyped({ ...hasTyped, weight: true });

              if (e.target.value.length <= 4) {
                setInfo({ ...info, weight: e.target.value });
              }
            }}
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
            className={clsx(
              `text-lg focus:outline-none p-1 w-full border-2 border-black`,
              {
                "border-red-600":
                  !(
                    info.crLvl &&
                    /^\d+\.?\d*$/.test(info.crLvl) &&
                    Number(info.crLvl) !== 0
                  ) && hasTyped.crLvl,
              }
            )}
            value={info.crLvl}
            onChange={(e) => {
              setHasTyped({ ...hasTyped, crLvl: true });

              if (e.target.value.length <= 4) {
                setInfo({
                  ...info,
                  crLvl: e.target.value,
                });
              }
            }}
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
        {hasTyped.age && hasTyped.crLvl && hasTyped.weight && (
          <div className="text-center font-bold text-2xl border-2 border-black rounded p-3">
            {calculate(info)}
          </div>
        )}
      </div>
    </main>
  );
}
