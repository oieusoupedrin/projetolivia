const express = require('express')
const Propostas = require('../models/propostas')

const router = express.Router()

router.post('/propostas', async (req,res) => {

    try {
        const proposta = Propostas.find({valor: {range0to2k: true}})
        return res.send("no Router")
    } catch (error) {
        res.status(400).send({ error: 'Erro na Busca'})
    }
})
router.get('/propostas', async (req,res) => {
    
    console.log(req.query.valor)
    try {

        const proposta = await Propostas.find({valor: req.query.valor, tipo: req.query.tipo, tipoPessoa: req.query.tipoPessoa})
        return res.send(proposta)
    } catch (error) {
        res.status(400).send({ error: 'Erro na Busca'})
    }
})

module.exports = app => app.use('/', router)