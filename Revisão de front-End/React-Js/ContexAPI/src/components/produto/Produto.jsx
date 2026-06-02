import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext.jsx"
import { ProdutoContext } from "../../context/ProdutoContext.jsx"


const Produto = () => {
    const {produto} = useContext(ProdutoContext)
    return (
        <>

            <h2>Página de Produto</h2>
            <p>Produtos cadastrados: <strong>{produto}</strong></p>

        </>
    )
}

export default Produto