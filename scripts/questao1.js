function calcularSoma() {
  let indice = 13;
  let soma = 0;
  let k = 1;

  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }

  document.getElementById(
    "somaResultado"
  ).textContent = `O valor final de SOMA é ${soma}`;
}
