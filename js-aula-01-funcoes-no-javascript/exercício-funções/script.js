// FUNÇÃO SIMPLES - Exercício 1
document.writeln("<h3>Exercício 01</h3>");
function showMessage() {
  const message =
    "<p>Nome: Felipe Hiroki <br> Idade: 18 anos <br> Cidade: Registro</p>";
  document.write(message);
}

showMessage();

// FUNÇÃO COM PARÂMETROS - Exercício 2
document.writeln("<h3>Exercício 02</h3>");
const n1 = 33;
const n2 = 6;

function divisao(n1, n2) {
  let resultado = n1 / n2;
  document.write(`<p>A divisão de ${n1} / ${n2} é igual a: ${resultado}.</p>`);
}
divisao(n1, n2);

// FUNÇÃO COM RETORNO - Exercício 03
document.writeln("<h3>Exercício 03</h3>");
const n3 = 47;
const n4 = 66;
const n5 = 13;

function multiplicacao(n3, n4, n5) {
  return n3 * n4 * n5;
}
document.write(
  `<p>A multiplicação de ${n3} * ${n4} * ${n5} é igual a: <strong> ${multiplicacao(n3, n4, n5)} </strong>.</p>`,
);

// FUNÇÃO COM MAIS DE UM RETORNO - Exercício 04
document.writeln("<h3>Exercício 04</h3>");
const idaden = 18;

function idade(idaden) {
  if (idaden >= 18) {
    return "Maior de idade.";
  } else {
    return "Menor de idade.";
  }
}

document.write(
  `<p>O usuário com ${idaden} anos é <strong> ${idade(idaden)} </strong>.</p>`,
);

// FUNÇÃO ANÔNIMA - Exercício 05
document.writeln("<h3>Exercício 05</h3>");
const notas = function (nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  if (media <= 5) {
    return "Reprovado.";
  } else {
    return "Aprovado.";
  }
};
const nota1 = 9;
const nota2 = 7;
document.write(`<p>O resultado foi: ${notas(nota1, nota2)}</p>`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO - Exercício 06
document.writeln("<h3>Exercício 06</h3>");
const triplo = (y) => {
  return y * 3;
};
const y = 46;
document.write(`<p>O triplo do número ${y} é ${triplo(y)}.</p>`);

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO - Exercício 07
document.writeln("<h3>Exercício 07</h3>");
const s4 = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};
const num1 = 12;
const num2 = 23;
const num3 = 34;
const num4 = 45;

document.write(
  `<p>O resultado de ${num1} + ${num2} + ${num3} + ${num4} é igual a ${s4(num1, num2, num3, num4)}.</p>`,
);

//IIFE - Exercício 08
document.writeln("<h3>Exercício 08</h3>");
const saudUser = (function (user) {
  document.write(
    `<p>Seja muito bem vindo ${user}! Você chegou até o final.</p>`,
  );
})("Felipe");
