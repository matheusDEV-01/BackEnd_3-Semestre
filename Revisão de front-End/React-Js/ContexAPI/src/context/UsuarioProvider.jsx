import { useState, useContext } from 'react'
import { UsuarioContext } from './UsuarioContext.jsx'
import { useEffect } from 'react'

//Disponibiliza o state do usuário de forma global para toda a aplicação
//todos os seus componentes filhos(children) terão acesso a esse state
export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)

    //ciclo de vida do componente - useEffect
    //verifica se existe um usuário logado no localStorage
    //se existir, atualiza o state global com os dados do usuário
    useEffect(() => {
        //ao montar o componente, verifica se existe um usuário logado no localStorage
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))   
        setUsuario(usuarioLogado) //atualiza o state global com os dados do usuário logado 
    }, [])

    return (
        <UsuarioContext.Provider
        value={{ 
            usuario, 
            setUsuario 
        }}
        >
        
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider