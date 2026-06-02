import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext.jsx"
import { useState } from "react"


function CadastroProduto() {
    const [prod, setProd] = useState("")
    const { produto, setProduto } = useContext(ProdutoContext)
    return (
        <div>
            <h2>Cadastro de Produto</h2>
            <input
                type="text"
                placeholder="Digite o nome do produto"
                onChange={(e) => {
                    setProd(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    setProduto([...produto, prod])
                }}
                
            >Cadastrar</button>
        </div>
    )
}

export default CadastroProduto