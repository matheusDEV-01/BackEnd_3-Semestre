import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UsuarioContext } from '../context/UsuarioContext.jsx'

//Componente de rota privada
const PrivateRoute = ({ children }) => {
    //Recupera o state global do usuário
  const {usuario} = useContext(UsuarioContext)
  //Se o usuario estiver logado, renderiza o componente privado
  //senão redireciona para a página inicial
    return usuario ? children : <Navigate to="/" />
}

export default PrivateRoute