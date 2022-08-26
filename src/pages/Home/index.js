import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './home.css'

function Home () {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'c8cb28a88ed31bb1905aea8ead814cc0',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)

        }

        loadFilmes()

    }, [])

    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='conteiner'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home