import livro from "../models/Livro.js";
import { Autor } from "../models/Autor.js";

class LivroController {

    static async listarLivros(req, res){
        try{    
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        }catch (erro){
            res.status(500).json( {message: `${erro.message} - falha na requisição`})
        }   
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
    
        try {
            // Primeiro, encontre o autor
            const autorEncontrado = await Autor.findById(novoLivro.autor);
    
            if (!autorEncontrado) {
                return res.status(404).json({ message: "Autor não encontrado" });
            }
    
            // Depois, crie o livro com os dados do autor
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
    
            // Finalmente, envie a resposta com o livro criado
            res.status(201).json({ message: "Livro criado com sucesso", livro: livroCriado });
    
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }
    

    static async listarLivroPorId (req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});

        };
    };

    static async atualizarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message : "livro Atualizado"});

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro`});
        };
    };

    static async excluirLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message : "livro excluido"});

        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na exclusão do livro`});
        };
    };

    //Busca usando parametro de query
    static async listarLivroPorEditora(req, res){
        const editora = req.query.editora;
        
        try{
            const livrosPorEditora = await livro.find({editora:editora}) //primeiro campo "editora" é a propriedade e o 2 valor é a propriedade
            res.status(200).json(livrosPorEditora);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    }

};

export default LivroController;

