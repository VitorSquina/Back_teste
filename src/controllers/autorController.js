import { Autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res){
        try{    
            const listarAutores = await Autor.find({});
            res.status(200).json(listarAutores);

        }catch (erro){
            res.status(500).json( {message: `${erro.message} - falha na requisição`})
        }   
    };

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", Autor: novoAutor});

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar Autor`});
        }
    };

    static async listarAutorPorId (req, res){
        try {
            const id = req.params.id;
            const AutorEncontrado = await Autor.findById(id);
            res.status(200).json(AutorEncontrado);

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor`});

        };
    };

    static async atualizarAutor (req, res){
        try {
            const id = req.params.id;
            await Autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message : "autor Atualizado"});

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização do autor`});
        };
    };

    static async excluirAutor (req, res){
        try {
            const id = req.params.id;
            await Autor.findByIdAndDelete(id);
            res.status(200).json({message : "autor excluido"});

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro`});
        };
    };
};

export default AutorController;

