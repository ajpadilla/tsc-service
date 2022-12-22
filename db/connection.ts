import {Sequelize} from 'sequelize';

const db = new Sequelize('usuarios_node', 'root', 'Heme19234099', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;