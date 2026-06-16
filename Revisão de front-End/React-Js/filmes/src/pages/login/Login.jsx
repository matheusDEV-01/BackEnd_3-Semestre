//Scaffold-Dbcontext "Server=(localdb)\MSSQLLocalDB;Database=HeroiAPI;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -ContextDir BdContextHeroi -Context HeroiContext -DataAnnotations
import { Link } from "react-router-dom";
import "./Login.css";
import Logo from "../../assets/img/logo.svg";
import Botao from "../../components/botao/Botao";
import Header from "../../components/header/Header";
import Fotter from "../../components/footer/Footer";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../context/usuario/UsuarioContext";
import api from "../../services/services";
import {jwtDecode} from "jwt-decode";
import {Alerta} from "../../components/alerta/Alerta";

const Login = () => {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const { setUsuario } = useContext(UsuarioContext);
   const navigate = useNavigate();
   const login = async () => {
    if (email.trim().length === 0 || senha.trim().length === 0) {
         Alerta({
            title: 'Atenção',
            text: 'O login não pode estar em branco.',
            icon: 'warning',
            confirmButtonText: 'Ok',
        })
        return
    };
    const dadosLogin = {
        email: email,
        senha: senha
    };
    try {
        const retornoAPI = await api.post("/Login", dadosLogin);
        const token = retornoAPI.data.token;
        const usuarioDecoded = jwtDecode(token);
        setUsuario(usuarioDecoded);
        localStorage.setItem("usuario", JSON.stringify(usuarioDecoded));
        navigate("/filme");
        setEmail("");
        setSenha("");
    } catch (error) {
        Alerta({
            title: 'Login',
            text: 'Usuário não encontrado',
            icon: 'error',
            confirmButtonText: 'Ok',
        });
    }
}
    return (
        <div className="container">
            <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}}  type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input value={senha} onChange={(e) => {setSenha(e.target.value)}} type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar"  
                onClick={(e) => {
                    e.preventDefault();
                    login()
                }}    
                />
                <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
            </form>
          </section>
        </main>
        </div>
    );

}
export default Login;