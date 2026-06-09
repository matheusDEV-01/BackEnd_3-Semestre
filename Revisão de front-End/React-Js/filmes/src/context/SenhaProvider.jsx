import { useState } from 'react';
import SenhaContext from './SenhaContext';

const SenhaProvider = ({ children }) => {
    const {senha, setSenha} = useContext(SenhaContext);

   

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