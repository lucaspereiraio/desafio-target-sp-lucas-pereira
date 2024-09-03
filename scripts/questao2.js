function verificarFibonacci() {
  const num = parseInt(document.getElementById("fibonacciInput").value);
  let a = 0;
  let b = 1;
  let temp;

  if (num === a || num === b) {
    document.getElementById(
      "fibonacciResultado"
    ).textContent = `${num} pertence à sequencia de Fibonacci.`;
    return;
  }

  while (b < num) {
    temp = b;
    b = a + b;
    a = temp;
  }

  document.getElementById("fibonacciResultado").textContent =
    b === num
      ? `${num} pertence à sequencia de Fibonacci.`
      : `${num} NÃO pertence à sequencia de Fibonacci.`;
}
