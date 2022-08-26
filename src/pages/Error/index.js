import { Link } from 'react-router-dom'

import './error.css'

function Error () {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Página não localizada!</h2>
            <Link to='/'>Ir para os filmes</Link>
        </div>
    )
}

export default Error