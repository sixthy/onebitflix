import express from "express"
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database";


const App = express();

App.use(express.static('public'));

App.use(adminJs.options.rootPath, adminJsRouter);


const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log(`Server iniciado com sucesso na porta ${PORT}.`)        
    })
    console.log('Conexão com o DB com sucesso')
})