import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_development',
    username: 'sixthy',
    password: 'gabriel2123',
    define: {
        underscored: true
    }
})