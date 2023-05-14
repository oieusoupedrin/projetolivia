const mongoose = require('../propostasDB')

const propostasSchema = mongoose.Schema({
    nome: {type: String},
    valor: {
        range0to2k: {type: Boolean},
        range2to5k:  {type: Boolean},
        range5to10k:  {type: Boolean},
        range15to25k:  {type: Boolean},
        range25to50k:  {type: Boolean},
        range50to100k:  {type: Boolean},
    },
    tipo: {
        fgts:  {type: Boolean},
        pessoal:  {type: Boolean},
        consignado:  {type: Boolean},
        empresarial:  {type: Boolean},
    },
    tipoEmprego: {
        aposentado:  {type: Boolean},
        autonomo:  {type: Boolean},
        assalariado:  {type: Boolean},
        desempregado:  {type: Boolean},
        servidor:  {type: Boolean},
        militar:  {type: Boolean}
    }
})  
const Propostas = mongoose.model("propostas", propostasSchema )


module.exports = Propostas