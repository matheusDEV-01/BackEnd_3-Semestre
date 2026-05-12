import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header >
            <nav>

                <Link to="/">Home</Link> {"|"}
                <Link to="/quemsomos">Quem Somos</Link> {"|"}
                <Link to="/cadfrutas">Cadastro de Frutas</Link> {"|"}

            </nav>
        </header>
    );
}
