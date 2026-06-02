import { useState, useContext } from 'react'
import { UsuarioContext } from './UsuarioContext.jsx'

//Disponibiliza o state do usuário de forma global para toda a aplicação
//todos os seus componentes filhos(children) terão acesso a esse state
export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('Matheus')
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