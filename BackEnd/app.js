require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

// MODEL
const Tarefa = require('./model/Tarefa')

// CREDENCIAIS
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

// CONEXAO MONGO
mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.tbv8xsq.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3001)
        console.log("Conectado ao BD Mongo!")
    }).catch((err) => console.log(err))

// FUNCTIONs
function buscaTarefa(id) {
    return tarefa.findIndex(usuario => usuario.id === id)
}

app.get('/', (req, res) => {
    res.status(200).json({ msg: "API Funcionando!" })
})
// TODAS TAREFAS
app.get('/tarefa', async(req, res) => {
    const tarefa = await Tarefa.find()
    res.status(200).json({ tarefa })
})
// REGISTRAR
app.post('/tarefa', async (req, res) => {
    const { tipo, linha, maquina, data, hora, solicitante, descricao} = req.body

    if (!tipo) {
        return res.status(422).json({ msg: "Tipo obrigatório!" })
    }
    if (!linha) {
        return res.status(422).json({ msg: "Linha obrigatória!" })
    }
    if (!maquina) {
        return res.status(422).json({ msg: "Máquina obrigatória!" })
    }
    if (!data) {
        return res.status(422).json({ msg: "Data obrigatória!" })
    }
    if (!hora) {
        return res.status(422).json({ msg: "Hora obrigatória!" })
    }
    if (!solicitante) {
        return res.status(422).json({ msg: "Solicitante obrigatório!" })
    }
    if (!descricao) {
        return res.status(422).json({ msg: "Descricao obrigatória!" })
    }

    const tarefa = new Tarefa({
        tipo,
        linha,
        maquina,
        data,
        hora,
        solicitante,
        descricao
    })

    try {
        await tarefa.save()
        res.status(201).json({ msg: "Usuário Criado!" })
    } catch (error) {
        res.status(500).json({ msg: "Tente mais tarde!" })
        console.log(error)
    }
})
// OBTER TAREFA
app.get("/tarefa/:id", async (req, res) => {
    const id = req.params.id;

    const tarefa = await Tarefa.findById(id)

    if (!tarefa) {
        return res.status(404).json({ msg: "Tarefa não encontrada!" })
    }

    res.status(200).json({ tarefa })
});

app.put('/tarefa/:id', async(req, res) => {
    let index = buscaTarefa(parseInt(req.params.id))
    tarefa[index].linha = req.body.linha
    res.status(201).json({ msg: "Alteração feita com sucesso!" })
})