import express from "express";
// Importando o módulo
import Cliente from "../models/Cliente.js";
const rota = express.Router();

// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
  // Selecionando todos os clientes do banco de dados (PROMISSE)
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        // Enviando a lista de clientes para a página HTML (front-end)
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`);
    });
});

// ROTA DE CADASTRO DE CLIENTES
rota.post("/clientes/cadastrar", (req, res) => {
  // Capturando os dados vindo do formulário e gravando nas variáveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  // Chamando o model para gravar os dados no banco
  // Equivalente ao INSERT INTO...
  Cliente.create({
    // NOME DA COLUNA / VARIÁVEL
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao cadastrar o cliente. Erro ${error}`);
    });
});
export default rota;
