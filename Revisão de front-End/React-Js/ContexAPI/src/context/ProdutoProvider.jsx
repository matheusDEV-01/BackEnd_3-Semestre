import { useState, useContext } from "react";
import { ProdutoContext } from "./ProdutoContext.jsx";

//Disponibiliza o state do produto de forma global para toda a aplicação
//todos os seus componentes filhos(children) terão acesso a esse state
export const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState([]);
  return (
    <ProdutoContext.Provider
      value={{
        produto,
        setProduto,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};