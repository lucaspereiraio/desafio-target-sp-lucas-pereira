function calcularPercentual() {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const faturamentoTotal = Object.values(faturamentoEstados).reduce(
    (acc, valor) => acc + valor,
    0
  );

  let resultado = "";
  for (let estado in faturamentoEstados) {
    const percentual = (
      (faturamentoEstados[estado] / faturamentoTotal) *
      100
    ).toFixed(2);
    resultado += `<p>${estado}: ${percentual}%</p>`;
  }

  document.getElementById("percentualResultado").innerHTML = resultado;
}
