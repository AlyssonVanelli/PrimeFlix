import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import Filme from './pages/Filme/index'
import Error from './pages/Error/index'
import Favoritos from './pages/Favoritos/index'

import Header from './components/Header'

function RoutesApp () {
    return (
        <BrowserRouter>
            < Header />
            <Routes>
                <Route path='/' element = { < Home /> } />
                <Route path='/filme/:id' element = { < Filme /> } />
                <Route path='/favoritos' element = { < Favoritos /> } />

                <Route path='*' element = { < Error /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp