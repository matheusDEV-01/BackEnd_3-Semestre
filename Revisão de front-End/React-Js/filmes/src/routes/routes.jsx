//instalar o pacote react-router-dom

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFIlme/cadastroFIlme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filmes" />
                <Route element={<CadastroGenero />} path="/generos" />
            </Routes>



        </BrowserRouter>
    )
}

export default Rotas