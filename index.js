function calCrCl() {
  // sex
  let sex = "";

  if (document.getElementById("maleRadioButton").checked) {
    sex = "male";
  } else {
    sex = "female";
  }

  // age
  const age = document.getElementById("ageInput").value;

  // weight
  let weight = 0;

  if (weightUnit === "kg") {
    weight = document.getElementById("weightInput").value;
  } else {
    weight = document.getElementById("weightInput").value / 2.2;
  }

  // cr
  let cr = 0;

  if (crUnit === "umol/L") {
    cr = document.getElementById("crInput").value / 88.4;
  } else {
    cr = document.getElementById("crInput").value;
  }

  // validate input
  if (!(age && weight && cr)) {
    return "Missing infomation";
  } else if (
    !(
      /^\d+$/.test(age.toString()) &&
      /^\d+\.?\d*$/.test(weight.toString()) &&
      /^\d+\.?\d*$/.test(cr.toString())
    )
  ) {
    return "Invalid information";
  }

  // if input valid, then calulate CrCl here
  if (sex === "male") {
    return `CrCl = ${((140 - age) * weight) / (72 * cr)} mL/min`;
  } else {
    return `CrCl = ${(((140 - age) * weight) / (72 * cr)) * 0.85} mL/min`;
  }
}

// select weigth unit
let weightUnit = "kg";

const unitButtonKg = document.getElementById("unitButtonKg");
const unitButtonLbs = document.getElementById("unitButtonLbs");

unitButtonKg.addEventListener("click", () => {
  weightUnit = "kg";

  unitButtonKg.style.background = "grey";
  unitButtonKg.style.color = "white";

  unitButtonLbs.style.background = "white";
  unitButtonLbs.style.color = "grey";
});

unitButtonLbs.addEventListener("click", () => {
  weightUnit = "lbs";

  unitButtonKg.style.background = "white";
  unitButtonKg.style.color = "grey";

  unitButtonLbs.style.background = "grey";
  unitButtonLbs.style.color = "white";
});

// select cr unit
let crUnit = "mg/dL";

const unitButtonMgdL = document.getElementById("unitButtonMgdL");
const unitButtonUmolL = document.getElementById("unitButtonUmolL");

unitButtonMgdL.addEventListener("click", () => {
  crUnit = "mg/dL";

  unitButtonMgdL.style.background = "grey";
  unitButtonMgdL.style.color = "white";

  unitButtonUmolL.style.background = "white";
  unitButtonUmolL.style.color = "grey";
});

unitButtonUmolL.addEventListener("click", () => {
  crUnit = "umol/L";

  unitButtonMgdL.style.background = "white";
  unitButtonMgdL.style.color = "grey";

  unitButtonUmolL.style.background = "grey";
  unitButtonUmolL.style.color = "white";
});

// calculation button
const calButton = document.getElementById("calButton");

calButton.addEventListener("click", () => {
  const result = calCrCl();

  document.getElementById("crClDisplay").innerHTML = `
  <h2>${result}</h2>
  `;
});
