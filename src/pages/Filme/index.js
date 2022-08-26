import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'

import './filme-info.css'

function Filme () {
    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`,{
                params: {
                    api_key: 'c8cb28a88ed31bb1905aea8ead814cc0',
                    language: 'pt-BR',
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                navigate('/', { replaced: true })
                return
            })
        }

        loadFilme()

        return () => {console.log('Componente desmontado')}

    }, [navigate, id])

    function salvarFilme () {
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )

        if (hasFilme) {
            toast.warning('Este filme já esta na lista!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com successo')

    }

    if (loading) {
        return (
            <div className='filme-info'>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="noopener noreferrer" >
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    )
}

export default Filme