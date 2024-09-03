async function calcularFaturamento() {
  try {
    const response = await fetch("faturamento.json");
    const data = await response.json();

    const faturamento = data.faturamento;

    const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

    const menorValor = Math.min(...diasComFaturamento.map((dia) => dia.valor));
    const maiorValor = Math.max(...diasComFaturamento.map((dia) => dia.valor));

    const soma = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const media = soma / diasComFaturamento.length;

    const diasAcimaMedia = diasComFaturamento.filter(
      (dia) => dia.valor > media
    ).length;

    document.getElementById("faturamentoResultado").innerHTML = `
      <p>Menor valor de faturamento: R$${menorValor.toFixed(2)}</p>
      <p>Maior valor de faturamento: R$${maiorValor.toFixed(2)}</p>
      <p>Número de dias com faturamento acima da média: ${diasAcimaMedia}</p>
    `;
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    document.getElementById("faturamentoResultado").textContent =
      "Erro ao processar os dados.";
  }
}
