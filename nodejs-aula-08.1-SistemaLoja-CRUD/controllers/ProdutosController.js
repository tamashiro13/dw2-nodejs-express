import express from "express";
// Importando o módulo
import Produto from "../models/Produto.js";
const rota = express.Router();


// ROTA PRODUTOS
rota.get("/produtos", function (req, res) {
    // Selecionando todos os produtos do banco de dados (PROMISSE)
    Produto.findAll().then((produtos) => {
        res.render("produtos", {
            // Enviando a lista de produtos para a página HTML (front-end)
            produtos: produtos,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os produtos. Erro: ${error}`)
    });
});
export default rota;
