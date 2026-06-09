import { useState } from 'react';
import UsuarioContext from './UsuarioContext';
import SenhaContext from './SenhaContext';
import { useContext } from 'react';

const UsuarioProvider = ({ children }) => {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

      useEffect(() => {
        //ao montar o componente, verifica se existe um usuário logado 
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))   
        setUsuario(usuarioLogado) //atualiza o state global com os dados do usuário 
    }, [])


    return (
        <UsuarioContext.Provider
            value={
                {
                    email,
                    setEmail,
                    token,
                    setToken
                }}>
                    
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider;