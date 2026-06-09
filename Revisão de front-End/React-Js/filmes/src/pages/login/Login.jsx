import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";

const Senha = () => {
    const { senha, setSenha } = useContext(SenhaContext); //state global


    const onChangeSenha = (e) => {
        setSenha(e.target.value);
    }
}

const Email = () => {
    const { email, setEmail } = useContext(UsuarioContext); //state global
    const [novoUsuario, setNovoUsuario] = useState("")//state local

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
}



const Login = () => {

    const { email, setEmail } = useContext(UsuarioContext);
    const { senha, setSenha } = useContext(SenhaContext);

   
 const login = async (e) => 
        {
        e.preventDefault();

        const objusuario = {
            email,
            senha
        };

        try 
        {
            const resposta = await fetch(
                "https://localhost:7040/api/Login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(objusuario)
                }
            );

        }
        catch (error)
        {
            console.log(error);
        }
    }





    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />
                <form action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail" />
                        </div>
                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha" />
                        </div>
                    </div>
                    <Botao nomeDoBotao="Entrar" />
                </form>
            </section>
        </main>
    )
}

export default Login;