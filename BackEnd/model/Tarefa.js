const mongoose = require('mongoose')

const Tarefa = mongoose.model('Tarefa', {
    tipo: String,
    linha: String,
    maquina: String,
    data: String,
    hora: String,
    solicitante: String,
    descricao: String,
})

module.exports = Tarefa