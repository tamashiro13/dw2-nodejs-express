import express from "express";
// Importando o módulo
import Cliente from "../models/Cliente.js";
const rota = express.Router();


// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
    // Selecionando todos os clientes do banco de dados (PROMISSE)
    Cliente.findAll().then((clientes) => {
        res.render("clientes", {
            // Enviando a lista de clientes para a página HTML (front-end)
            clientes: clientes,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os clientes. Erro: ${error}`)
    });
});
export default rota;