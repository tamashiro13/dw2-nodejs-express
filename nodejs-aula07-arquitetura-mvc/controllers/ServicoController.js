// Importando o framwork Express
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router(); 

// ROTA DE PRODUTOS
rota.get("/servicos", (req, res) => {
  res.render("servicos");
});

// Exportando o módulo
export default rota;