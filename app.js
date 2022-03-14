const billEl = document.querySelector(".number");
const noOfPeopleEl = document.querySelector(".people");
const tipAmountEl = document.querySelector(".right-1");
const totalAmountEl = document.querySelector(".right-2");
const percentEl = document.querySelectorAll(".number-per");
const errorMsg = document.querySelector(".err");
const customEl = document.querySelector(".custom");

let percentTipValue = 0;
let billValue = Number(billEl.value);
let noOfPeople = Number(noOfPeopleEl.value);

function calculateValue() {
  billValue = Number(billEl.value);
  noOfPeople = Number(noOfPeopleEl.value);

  if (
    noOfPeople === null ||
    noOfPeople === "" ||
    noOfPeople === 0 ||
    typeof noOfPeople === "string"
  ) {
    noOfPeopleEl.style.border = "1px solid pink";
    errorMsg.textContent = "Can't be zero";
  } else {
    noOfPeopleEl.style.border = "transparent";
    errorMsg.textContent = "";
    tipAmountEl.textContent =
      "$" + ((billValue * (percentTipValue / 100)) / noOfPeople).toFixed(2);
    totalAmountEl.textContent =
      "$" +
      (
        (billValue * (percentTipValue / 100)) / noOfPeople +
        billValue / noOfPeople
      ).toFixed(2);
  }
}

billEl.addEventListener("keyup", function () {
  calculateValue();
});

noOfPeopleEl.addEventListener("keyup", function () {
  calculateValue();
});

for (let i = 0; i < percentEl.length; i++) {
  percentEl[i].addEventListener("click", function () {
    if (!percentEl[i].classList.contains("custom")) {
      percentTipValue = parseInt(percentEl[i].textContent);
    }
    calculateValue();
  });
}

customEl.addEventListener("keyup", function() {
    percentTipValue = Number(customEl.value);
    calculateValue();
})