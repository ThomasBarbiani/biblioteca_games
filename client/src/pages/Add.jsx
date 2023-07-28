import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Add = () => {
    const [game, setGame] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setGame((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        if (!game.title || !game.desc || !game.price || !game.cover) {
            alert("Preencha todos os campos.");
            return;
        }

        try {
            await axios.post("http://localhost:8800/games", game)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }


    return(
        <div>
            <div className="form">
                <h1>Adicionar Jogo</h1>
                <input type="text" placeholder="Título" onChange={handleChange} name="title"/>
                <textarea placeholder="Descrição" onChange={handleChange} name="desc"></textarea>
                <input type="number" placeholder="Preço" onChange={handleChange} name="price"/>
                <input type="text" placeholder="Capa (Link Web)" onChange={handleChange} name="cover"/>
                <button className="formButton" onClick={handleClick}>Adicionar</button>
            </div>
            <Link 
                to="/" 
                className="buttonGame"
            >
                Ver todos os Jogos
            </Link>
        </div>
    )
}

export default Add