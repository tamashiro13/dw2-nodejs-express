// Importando o framwork Express
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router(); 

// ROTA DE PRODUTOS
rota.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Felipe Hiroki", cpf: "999.999.999-99" },
    { nome: "Satio Daniel", cpf: "888.888.888-88" },
    { nome: "Enzo Davies", cpf: "777.777.777-77" },
    { nome: "Mario Takahashi", cpf: "666.666.666-66" },
  ];
  res.render("clientes", {
    // Enviando a lista de clientes para a página
    clientes: clientes,
  });
});

// Exportando o módulo
export default rota;