// DATA ATUAL
const dataAtual = new Date();
document.write(`<p>${dataAtual}</p>`);

const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = dataAtual.getFullYear();
document.write(`<p>${dia}/${mes}/${ano}</p>`);

// COMPRA EM DÓLAR
const compraInternacional = 500.75;
document.write(
  `<p>O valor da compra em dólar é ${compraInternacional.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}</p>`,
);

// CONVERSÃO PARA REAL
const cotacaoDolar = 5.4;
const compraEmReal = compraInternacional * cotacaoDolar;
document.write(
  `<p>Convertendo para real, o valor da compra fica ${compraEmReal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</p>`,
);

// DATA DE ENTREGA
const dataEntrega = new Date();
dataEntrega.setDate(dataEntrega.getDate() + 12);
const diaEntrega = String(dataEntrega.getDate()).padStart(2, "0");
const mesEntrega = String(dataEntrega.getMonth() + 1).padStart(2, "0");
const anoEntrega = dataEntrega.getFullYear();
document.write(
  `<p>A entrega está prevista para o dia ${diaEntrega}/${mesEntrega}/${anoEntrega}</p>`,
);

// NOME DO CLIENTE
const nomeCliente = "fElIpE hIrOkI";
const nomeFormatado = nomeCliente
  .toLowerCase()
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");
document.write(`<p>Seja bem-vindo, ${nomeFormatado}!</p>`);