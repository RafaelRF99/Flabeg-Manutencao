const express = require('express');
const app = express();
app.use(express.json());

function buscaUsuario(id) {
    return usuario.findIndex(usuario => usuario.id === id)
}

const usuario = [{
    id: 1,
    tipo: "Corretiva",
    linha: 3,
    maquina: "Hexapod",
    data: "26/04/2023",
    hora: "10:00",
    solicitante: "Rafael F.",
    descricao: "Máquina travada, não sai o erro da tela"
}]

app.listen(3001, () => {
    console.log("Porta Ativa")
})

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Rota Base Ativa!" })
})

// ROTA DO USUARIO
app.get('/usuario', (req, res) => {
    res.status(200).send(usuario)
})

app.post('/usuario', (req, res) => {
    usuario.push(req.body)
    res.status(200).json({ msg: "Usuario cadastrado!" })
})

app.put('/usuario/:id', (req, res) => {
    let index = buscaUsuario(parseInt(req.params.id))
    usuario[index].linha = req.body.linha
    res.status(201).json({ msg: "Alteração feito com sucesso!" })
})