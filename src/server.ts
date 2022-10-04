import express from "express"
import { sequelize } from "./database";

const App = express();

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Conexão com o DB com sucesso')
    })
    console.log(`Server iniciado com sucesso na porta ${PORT}.`)
})