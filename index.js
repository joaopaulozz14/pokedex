import express from 'express';
import path from 'path';


const ___dirname = path.resolve(path.dirname(''));

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(___dirname, 'public')));
app.use(express.urlencoded());
const port = 3001;

const pokedex = [
    {
        nome: 'Bulbasaur',
        descricao: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        tipo: 'grass'
    },
    {
        nome: 'Ivysaur',
        descricao: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        tipo: 'fire'
    },
    {
        nome: 'Wartortle',
        descricao: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        tipo: 'water'
    }
]


app.get("/", (req, res) => {
    res.render("index", { pokedex });
});
app.post("/cadastro", (req, res) => {
    const pokemon = req.body;

    pokedex.push(pokemon);
    console.log(pokemon)
    console.log('nfi')
    res.redirect("/")
})
app.listen(3001, () => console.log(`Servidor rodando na porta ${port}`));