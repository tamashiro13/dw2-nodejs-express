import express from "express";
// Importando o módulo
import Pedido from "../models/Pedido.js";
const rota = express.Router();


// ROTA PEDIDOS
rota.get("/pedidos", function (req, res) {
    // Selecionando todos os pedidos do banco de dados (PROMISSE)
    Pedido.findAll().then((pedidos) => {
        res.render("pedidos", {
            // Enviando a lista de pedidos para a página HTML (front-end)
            pedidos: pedidos,
        });
    }).catch(error => {
        console.log(`Ocorreu um erro ao listar os pedidos. Erro: ${error}`)
    });
});
export default rota;