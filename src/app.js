// importando express
import express from "express";

//instanciando express
const app = express();

app.use(express.json());


function buscarGrupo(id){
    return grupos.findIndex(grupo => grupo.id == id)
}

function buscarUnidade(id){
    return unidades.findIndex(unidade => unidade.id == id)
}

function buscarUsuario(id){
    return usuarios.findIndex(usuario => usuario.id == id)
}

// array de grupos para retorno
const grupos = [
    {id: 0, nome: "Todos"},
    {id: 1, nome: "Administradores"}, 
    {id: 2, nome: "Gerentes"},
    {id: 3, nome: "Usuários limitados"}
]
// array de unidades para retorno
const unidades = [
    {id: 0, nome: "Porto Velho"},
    {id: 1, nome: "Vilhena"},
    {id: 2, nome: "Cacoal"},
    {id: 3, nome: "Guajará"}
]

// array de usuarios para retorno
const usuarios = [
    {id: 0, nome: "Ruan Lopes"},
    {id: 1, nome: "Luis Felipe"},
    {id: 2, nome: "Silvio Huan"},
    {id: 3, nome: "Marquinho do Pneu"}
]

// Rota vazia - raiz
app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth');
})

// get
app.get('/grupos', (req, res) => {
    res.status(200).json(grupos);
})

app.get('/grupos/:id', (req, res) => {
    let index = buscarGrupo(req.params.id)
    res.json(grupos[index])
})

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades);
})

app.get('/unidades/:id', (req, res) => {
    let index = buscarUnidade(req.params.id)
    res.json(unidades[index])
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    let index = buscarUsuario(req.params.id)
    res.json(usuarios[index])
})

//post
app.post('/grupos',(req, res) => {
    grupos.push(req.body)
    res.status(201).send("Grupo cadastrado!")
})

app.post('/unidades',(req, res) => {
    unidades.push(req.body)
    res.status(201).send("Unidade cadastrada!")
})

app.post('/usuarios',(req, res) => {
    unidades.push(req.body)
    res.status(201).send("Usuario cadastrada!")
})

//put
app.put('/grupos/:id',(req,res) => {
    let index = buscarGrupo(req.params.id);
    grupos[index].nome = req.body.nome;

    res.json(grupos[index])
})

app.put('/unidades/:id',(req,res) => {
    let index = buscarUnidade(req.params.id);
    unidades[index].nome = req.body.nome;

    res.json(grupos[index])
})

app.put('/unidades/:id',(req,res) => {
    let index = buscarUsuario(req.params.id);
    usuarios[index].nome = req.body.nome;

    res.json(usuarios[index])
})

//delete
app.delete('/grupos/:id', (req, res) => {
    let index = buscarGrupo(req.params.id);
    grupos.splice(index, 1);

    res.send(`Grupo ${req.params.id} removido!`)
})

app.delete('/unidades/:id', (req, res) => {
    let index = buscarUnidade(req.params.id);
    unidades.splice(index, 1);

    res.send(`Unidade ${req.params.id} removida!`)
})

app.delete('/usuarios/:id', (req, res) => {
    let index = buscarUsuario(req.params.id);
    usuarios.splice(index, 1);

    res.send(`Usuario ${req.params.id} removido!`)
})

// exportando para o server.js fazer uso
export default app