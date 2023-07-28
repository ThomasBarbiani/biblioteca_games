import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [game, setGame] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    })

    const navigate = useNavigate()
    const location = useLocation()
    const gameId = location.pathname.split("/")[2]

    useEffect(() => {
        axios.get("http://localhost:8800/games/" + gameId)
            .then(response => {
                const { title, desc, price, cover } = response.data;
                setGame({ title, desc, price, cover });
            })
            .catch(error => {
                console.error(error);
            });
    }, [gameId]);

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
            await axios.put("http://localhost:8800/games/"+ gameId, game)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }


    return(
        <div>
            <div className="form">
                <h1>Atualizar Jogo</h1>
                <input type="text" placeholder="Título" onChange={handleChange} name="title" value={game.title} />
                <textarea placeholder="Descrição" onChange={handleChange} name="desc" value={game.desc}></textarea>
                <input type="number" placeholder="Preço" onChange={handleChange} name="price" value={game.price || ''} />
                <input type="text" placeholder="Capa (Link Web)" onChange={handleChange} name="cover" value={game.cover} />
                <button className="formButton" onClick={handleClick}>Atualizar</button>
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

export default Update