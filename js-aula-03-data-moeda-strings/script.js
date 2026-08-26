document.write("<h3>Manipulando datas:</h3>");

// Para começarmos a manipular datas no JavaScript, precisamos primeiro criar uma instância da classe Date, que é nativa do JavaScript
const dataAtual = new Date();
document.write(dataAtual);
// Pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}.</p>`);
// Pegando o mês atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês ${mes}.</p>`);
// Pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Atualmente estamos no ano de ${ano}.</p>`);
// Exibindo data completa
document.write(`<p>Data de hoje: ${dia}/${mes}/${ano}.</p>`);

// ADICIONANDO DIAS, MESES E ANOS À DATA ATUAL
// Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);
// Exibindo a nova data:
document.write(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}.</p>`);

// Adicionando 3 meses à data atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);
// Exibindo a nova data:
document.write(`<p>Daqui a 3 meses será mês ${dataAtual.getMonth() + 1}.</p>`);

// Adicionando 2 anos à data atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);
// Exibindo a nova data:
document.write(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}.</p>`);

//##############################################################################

// FORMATAÇÃO DE MOEDAS
document.write("<h3>Manipulando moedas:</h3>");
const futuroSalario = 40000.3;
document.write(`<p>${futuroSalario}</p>`);
// Mostrando casas decimais
document.write(`<p>${futuroSalario.toFixed(2)}</p>`);
// Ocultando casas decimais
document.write(`<p>${futuroSalario.toFixed(0)}</p>`);
// Trocando o identificador de casas decimais
document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);

// FORMATANDO PARA REAL (R$)
document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
</p>`);

// FORMATANDO PARA DÓLAR (USD)
document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
</p>`);

//##############################################################################

// FORMATAÇÃO DE STRINGS
document.write("<h3>Manipulando Strings:</h3>");
const nome = "Felipe Hiroki";

// ALTERANDO STRINGS PARA LETRAS MAIÚSCULAS
document.write(`<p>${nome.toUpperCase()}</p>`);

// ALTERANDO STRINGS PARA LETRAS MINÚSCULAS
document.write(`<p>${nome.toLowerCase()}</p>`);

// COLOCANDO AS INICIAIS EM LETRAS MAIÚSCULAS
const cidade = "pedro de toledo";
const cidadeFormatada = cidade
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");
// Exibindo
document.write(`<p>${cidadeFormatada}</p>`);

// CONTANDO O NÚMERO DE CARACTERES
document.write(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`);
