import express from "express"

const App = express();

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
    console.log(`Server iniciado com sucesso na porta ${PORT}.`)
})