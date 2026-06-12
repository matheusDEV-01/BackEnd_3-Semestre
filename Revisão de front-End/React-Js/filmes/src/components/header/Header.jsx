import "./Header.css";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Porta from "/public/Porta.png";
import Icone from "/public/icone.png";
import { UsuarioContext } from "../../context/usuario/UsuarioContext";

const Header = () => {
    const { setUsuario } = useContext(UsuarioContext);

    const sair = () => {
        localStorage.clear();
        setUsuario(null);
    };

    return (
        <header>
            <div className="layout_grid cabecalho">
                    <img className="logo_header" src={Logo} alt="Logo do Filmoteca" />

                <nav className="nav_header">
                    <Link className="link_header" to="/Filme">
                        Filme
                    </Link>

                    <Link className="link_header" to="/Genero">
                        Gênero
                    </Link>

                    <img
                        className="icone_usuario"
                        src={Icone}
                        alt="Ícone de Usuário"
                    />

                    <img
                        className="icone_sair"
                        src={Porta}
                        alt="Sair"
                        onClick={sair}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Header;