import { useContext } from "react";
import  UsuarioContext  from "../context/UsuarioContext";
import { Navigate } from "react-router-dom";
import  SenhaContext  from "../context/SenhaContext";

const PrivateRoute = ({children}) => {

    const {email} = useContext(UsuarioContext)
    const {senha} = useContext(SenhaContext)

    return email && senha ? children : <Navigate to="/" />
}

export default PrivateRoute