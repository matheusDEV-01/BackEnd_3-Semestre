import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext.jsx"
import { useState } from "react"

const Perfil = () => {
    //destyructuting - contexts
    const { usuario, setUsuario } = useContext(UsuarioContext)//state global
    const [novoUsuario, setNovoUsuario] = useState("")//state local

    //guarda o usuario no localStorage do formato json
    const login = () => {
        localStorage.setItem("usuario", JSON.stringify(novoUsuario)) //guarda o usuario no localStorage
        setUsuario(novoUsuario) //atualiza o state global
        setNovoUsuario("") //limpa os dados do formulário
    }

    return (
        <div>
            <h2>Página de Perfil {usuario}</h2>

            <input
                type="text"
                placeholder="Digite o nome do usuário"
                value={novoUsuario}
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}
            />

            <button
                onClick={() =>
                    login()
                }

            >Entrar</button>


        </div>


    )
}

export default Perfil