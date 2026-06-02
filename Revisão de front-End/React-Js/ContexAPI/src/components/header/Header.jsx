import { Link } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext.jsx"

const Header = () => {
    const {usuario} = useContext(UsuarioContext)
    return (
        <header>
            <nav>
                <Link to="/">Home</Link> {" "}
                <Link to="/perfil">Perfil</Link> {" "}
                <Link to="/produto">Produto</Link>{" "}
                <Link to="/cadastro">Cadastrar Produto</Link>{" "}
                <Link to="/listar">Listar Produtos</Link>
            </nav>
            <h1>Bem Vindo, {usuario}</h1>
        </header>

    )
}

export default Header
