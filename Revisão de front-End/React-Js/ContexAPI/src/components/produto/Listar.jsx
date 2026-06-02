import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext.jsx"

function ListarProduto() {
        const { produto } = useContext(ProdutoContext);

    return (
        <>
            <h2>Lista de Produtos</h2>

            {produto.length === 0 ? (
                <p>Nenhum produto cadastrado.</p>
            ) : (
                <ul>
                    {produto.map((e) => (
                        <li key={Math.random()}>
                            {e}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ListarProduto