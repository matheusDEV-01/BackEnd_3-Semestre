import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext.jsx"
import { useState } from "react"

const Perfil = () => {
    //destyructuting - contexts
    const { usuario, setUsuario } = useContext(UsuarioContext)//state global
    const [ novoUsuario, setNovoUsuario ] = useState("")//state local

    return (
        <div>
            <h2>Página de Perfil {usuario}</h2>

            <input
                type="text"
                placeholder="Digite o nome do usuário"
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}
            />

            <button
                onClick={() => 
                    setUsuario(novoUsuario)
                }

            >Trocar Usuário</button>

    
        </div>


    )
}

export default Perfil