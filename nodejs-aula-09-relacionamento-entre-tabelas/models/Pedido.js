//Model Pedido
// Um Model é uma representação de uma entidade do sistema (tabela)

//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

// O método define() define a estrutura de uma tabela no banco
const Pedido = connection.define('pedidos',{
    // Atributos da tabela 'clientes'
    numero: {
        type: Sequelize.INTEGER,
        allowull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    // Chave Estrangeira
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// O método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// force: false -> Sincroniza a tabela somente na primeira vez, ou seja, (somente se não existir)

// Essa linha será movida para o arquivo "index.js"
// Pedido.sync({force: false})

// Exportando o módulo
export default Pedido;