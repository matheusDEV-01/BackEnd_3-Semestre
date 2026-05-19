//instalar o pacote react-router-dom

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFIlme/cadastroFIlme"
import CadastroGenero from "../pages/CadastroGenero/CadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>

            <nav>
                <Link to="/">Login</Link> {""}
                <Link to="/filme">Filmes</Link> {""}
                <Link to="/genero">Gêneros</Link> {""}
            </nav>

            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filme" />
                <Route element={<CadastroGenero />} path="/genero" />
            </Routes>



        </BrowserRouter>
    )
}

export default Rotas