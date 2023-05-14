const express = require('express')
const Propostas = require('../models/propostas')

const router = express.Router()

router.get('/propostas', async (req,res) => {
    try {
        const proposta = await Propostas.find({valor: req.query.valor, tipo: req.query.tipo, tipoPessoa: req.query.tipoPessoa, situacao: req.query.situacao})
        return res.send(proposta)
    } catch (error) {
        res.status(400).send({ error: 'Erro na Busca'})
    }
})

module.exports = app => app.use('/', router)