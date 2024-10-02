import express from "express";
import conectaDatabase from "./config/dbconfigConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDatabase(); //await por ser uma função assync

conexao.on("error", (erro) => {
    console.error("error de conexão ", erro);
});

conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso")
});

const app = express();
routes(app);




export default app;



