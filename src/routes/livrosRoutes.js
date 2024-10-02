//as rotas são chamadas em sequencia conforme a declaração das mesmas no VS
//express segue uma busca de rotas em ordem, segue da maior complexidade para a maior

import express from "express";
import LivroController  from "../controllers/livroController.js";

const routes = express.Router();

//GET
routes.get("/Livros", LivroController.listarLivros);
//Parametro de query, consulta
routes.get("/livros/busca", LivroController.listarLivroPorEditora);

//GET BY ID
routes.get("/livros/:id", LivroController.listarLivroPorId);

//POST
routes.post("/livros", LivroController.cadastrarLivro);

//PUT
routes.put("/livros/:id", LivroController.atualizarLivro);

//DELETE
routes.delete("/livros/:id", LivroController.excluirLivro);







export default routes;

