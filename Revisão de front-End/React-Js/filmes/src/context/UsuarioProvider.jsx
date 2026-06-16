import { useState } from 'react';
import UsuarioContext from './UsuarioContext';
import { useEffect } from 'react';

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")) || null);
  

      useEffect(() => {
        //ao montar o componente, verifica se existe um usuário logado 
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))   
        setUsuario(usuarioLogado) //atualiza o state global com os dados do usuário 
    }, [])


    return (
        <UsuarioContext.Provider
            value={
                {
                    usuario,
                    setUsuario,
                }}>
                    
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;