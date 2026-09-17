// Importando o Express com 3S6 Modules
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from './config/sequelize-config.js'
// Iniciando o Express 
const app = express() 

// Importando o Controller
import ClienteController from "./controllers/ClienteController.js";
import PedidoController from "./controllers/PedidoController.js";
import ProdutoController from "./controllers/ProdutoController.js";

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Realizando a conexão com o Banco de Dados
connection.authenticate().then(()=>{
    // Sucesso na promessa:
    console.log("Conexão com o banco de dados realizada com sucesso!");
    // Falha na promessa:   
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`)
});

// Configurandoo as rotas
// Inicializando as rotas

app.use("/", ClienteController);
app.use("/", PedidoController);
app.use("/", ProdutoController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})