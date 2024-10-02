import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
}, { versionKey: false });

const Autor = mongoose.model("autores", autorSchema);

// Exporte o modelo diretamente
export { Autor, autorSchema }; // Exportando ambos, o modelo e o esquema
