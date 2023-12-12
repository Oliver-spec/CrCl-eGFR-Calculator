import { Info } from "./definitions";

export default function calculate(info: Info) {
  let { weight, weightUnit, crLvl, crUnit, age, sex } = info;

  if (!(age && weight && crLvl)) {
    return "Missing infomation";
  } else if (
    !(
      /^\d+$/.test(age) &&
      Number(age) !== 0 &&
      /^\d+\.?\d*$/.test(weight) &&
      Number(weight) !== 0 &&
      /^\d+\.?\d*$/.test(crLvl) &&
      Number(crLvl) !== 0
    )
  ) {
    return "Invalid information";
  }

  if (weightUnit === "lbs") {
    weight = String(Number(weight) / 2.2);
  }

  if (crUnit === "umol") {
    crLvl = String(Number(crLvl) / 88.4);
  }

  if (sex === "male") {
    return `${(
      ((140 - Number(age)) * Number(weight)) /
      (72 * Number(crLvl))
    ).toFixed(1)} mL/min`;
  } else {
    return `${(
      (((140 - Number(age)) * Number(weight)) / (72 * Number(crLvl))) *
      0.85
    ).toFixed(1)} mL/min`;
  }
}
