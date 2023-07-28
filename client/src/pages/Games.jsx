import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Games = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchAllGames = async () => {
            try {
                const res = await axios.get("http://localhost:8800/games")
                setGames(res.data)
            } catch (err){
                console.log(err)
            }
        }
        fetchAllGames()
    }, [])

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Tem certeza que deseja deletar este jogo?");
        if (!confirmed) {
            return; 
        }

        try {
            await axios.delete("http://localhost:8800/games/" + id)
            window.location.reload()
        } catch (err){
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Biblioteca de Jogos</h1>
            <Link 
                to="/add" 
                className="buttonGame"
            >
                Adicionar Novo Jogo
            </Link>
            
            <div className='games'>
                {games.map((game) => (
                    <div className="game" key={game.id}> 
                        {game.cover && <img src={game.cover} alt="" />} 
                        <h2>{game.title}</h2>
                        <p>{game.desc}</p>
                        <span>R${game.price}</span>
                        <button className='button delete' onClick={() => handleDelete(game.id)}>Deletar</button>
                        <Link 
                            to={`/update/${game.id}`} 
                            className="button update"
                        >
                            Atualizar
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Games