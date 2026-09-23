//Model Produto
// Um Model é uma representação de uma entidade do sistema (tabela)

//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

// O método define() define a estrutura de uma tabela no banco
const Produto = connection.define('produtos',{
    // Atributos da tabela 'clientes'
    nome: {
        type: Sequelize.STRING,
        allownull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allownull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// force: false -> Sincroniza a tabela somente na primeira vez, ou seja, (somente se não existir)
Produto.sync({force: false})

// Exportando o módulo
export default Produto;