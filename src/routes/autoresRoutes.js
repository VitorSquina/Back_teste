import express from "express";
import autorController  from "../controllers/autorController.js";

const routes = express.Router();

//GET
routes.get("/autores", autorController.listarAutores);
routes.get("/autores/:id", autorController.listarAutorPorId);

//POST
routes.post("/autores", autorController.cadastrarAutor);

//PUT
routes.put("/autores/:id", autorController.atualizarAutor);

//DELETE
routes.delete("/autores/:id", autorController.excluirAutor);

export default routes;

