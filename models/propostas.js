const mongoose = require('../propostasDB')

const propostasSchema = mongoose.Schema({
    nome: {type: String},
    valor: {type: String},
    tipo: {type: String},
    perfil: {type: String}
})  
const Propostas = mongoose.model("propostas", propostasSchema )


module.exports = Propostas