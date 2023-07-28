import express from "express"
import bodyParser from 'body-parser';
import cors from 'cors'; 

import { getGames, getGame, addGame, updateGame, deleteGame } from './database.js';

const app = express()

app.use(bodyParser.json());
app.use(cors());


app.get("/games", async (req, res) => {
    const games = await getGames()
    res.json(games)
});

app.get("/games/:id", async (req, res) => {
    const id = req.params.id
    const game = await getGame(id)
    res.send(game)
})


app.post("/games", async (req, res) => {
    const { title, desc, cover, price } = req.body;
    const game = await addGame(title, desc, cover, price);
    res.json(game)
})

app.put("/games/:id", async (req, res) => {
    const id = req.params.id
    const { title, desc, cover, price } = req.body
    const game = await updateGame(id, title, desc, cover, price)
    res.json(game)
})

app.delete("/games/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await deleteGame(id);
        res.send("Note deleted successfully.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while deleting the note.");
    }
});

app.listen(8800, () => {
    console.log("Conectado no backend!")
})