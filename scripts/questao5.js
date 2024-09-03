function inverterString() {
  const inputString = document.getElementById("stringInput").value;
  let invertedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    invertedString += inputString[i];
  }

  document.getElementById(
    "inversaoResultado"
  ).textContent = `String invertida: ${invertedString}`;
}
