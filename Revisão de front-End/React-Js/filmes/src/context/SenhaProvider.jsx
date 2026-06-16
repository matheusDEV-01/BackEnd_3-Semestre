import { useState } from 'react';
import SenhaContext from './SenhaContext';

const SenhaProvider = ({ children }) => {
    const [senha, setSenha] = useState(JSON.parse(localStorage.getItem("senha")) || null);

   

    return (
        <SenhaContext.Provider
            value={
                {
                    senha,
                    setSenha
                }}>

            {children}
        </SenhaContext.Provider>
    )
}

export default SenhaProvider;