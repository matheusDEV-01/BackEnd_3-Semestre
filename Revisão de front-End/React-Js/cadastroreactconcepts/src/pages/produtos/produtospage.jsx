import "./produtospage.css"
import { use, useEffect, useState } from "react"

export default function ProdutosPage() {


    const [produto, setProduto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState(0)
    const [arrayProduto, setArrayProduto] = useState([])

    //carregar os dados do banco de dados json
    useEffect(() => {

        const getDados = async () => {
            try {
                const retornoAPI = await fetch("http://localhost:3000/Produtos")
                const dados = await retornoAPI.json()
                setArrayProduto(dados)
            } catch (error) {
                console.log(error)
            }
        }

        getDados()

    }, [])


    const Cadastrar = async (e) => {

        e.preventDefault()

        if (descricao === "" || produto === "" || preco < 0 || isNaN(preco) || imagem === "") {
            alert("Preencha todos os campos corretamente")
            return
        }

        const ObjetoProduto = {
            nome: produto,
            preco: preco,
            imagem: imagem,
            descricao: descricao
        }

        fetch("http://localhost:3000/Produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF"
            },
            body: JSON.stringify(ObjetoProduto)
        })

        setArrayProduto([...arrayProduto, { id: Date.now(), nome: produto, preco: preco, imagem: imagem, descricao: descricao }])
        limparCampos()
        return false;
    }

    function limparCampos() {
        setProduto("")
    }

    const deletar = async (e) => {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/Produtos/${e}`, {
                method: "DELETE",
            })

            // const novaLista = arrayProduto.filter((prod) =>{}



            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso!");
                setArrayProduto(novaLista)
            }else{
                alert("Erro ao cadastrar o produto")
            }





            getDados();
        } catch (cerror) { }
    }

    return (
        <>
            <h1>Cadastro</h1>

            <form action="" method="post" onSubmit={Cadastrar} className="secao-cadastro">
                <fieldset className="cadastro">
                    <div>
                        <label htmlFor="produto">Nome:</label>
                        <input

                            type="text"
                            id="produto"
                            className="cadastro__entrada"
                            onChange={(e) => setProduto(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            className="cadastro__entrada"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            className="cadastro__entrada"
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            className="cadastro__entrada"
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                </fieldset>

                <section className="secao-produtos">
                    {arrayProduto.map((p) => {
                        return (
                            <figure key={p.id} className="card-produto">
                                <img
                                    src={`/public/images/${p.imagem}.webp`}
                                    alt={p.nome}
                                    width="150"
                                />
                                <p><strong>{p.nome}</strong></p>
                                <p>Preço:{(p.preco).toFixed(2)}</p>
                                <p>Descrição</p>
                                <p>{p.descricao}</p>

                                <button type="button" onClick={() => { deletar(p.id) }} className="cadastro__btn-cadastrar">Deletar</button>
                            </figure>
                        )
                    })}
                </section>


            </form>
        </>

    )
}