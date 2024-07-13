const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const input = document.getElementById("number");

const romans = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];
convertButton.addEventListener("click", () => {
  response = "";
  output.innerText = "";
  if (input.value === "") {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (input.value <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (input.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  convert(input.value);
});
let response = "";

function convert(num) {
  response = "";
  for (let i = 0; i < romans.length; i++) {
    while (num >= romans[i][1]) {
      response += romans[i][0];
      num -= romans[i][1];
    }
  }
  output.innerText = "";
  output.innerText = response;
}
