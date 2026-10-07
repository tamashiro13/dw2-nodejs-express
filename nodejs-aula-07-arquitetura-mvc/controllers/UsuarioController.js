// ROTA DE PERFIL
// Importando o framwork Express
import express from "express";
// router() : método do Express para criar rotas
const rota = express.Router(); 

// ROTA DE PRODUTOS
rota.get("/perfil", (req, res) => {
  res.render("perfil");
});

// Exportando o módulo
export default rota;