import "./produtospage.css"
import { useEffect, useState } from "react"
import api from "../../Services/services";

export default function ProdutosPage() {

    const [listaProdutos, setListaProdutos] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("");
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState("");

    useEffect(() => {


        getDados();
    }, []);

    const getDados = async () => {
        try {
            const retornoAPI = await api.get("/Produtos");
            const dados = await retornoAPI.data;
            setListaProdutos(dados);
        } catch (error) {
            console.log(error);
        }
    };
    const cadastrarProduto = async (e) => {
        e.preventDefault();
        if (titulo.trim().length === 0 || descricao.trim().length === 0 || isNaN(preco)) {
            alert("Preencha todos os campos!");
            return;
        }
        const objProduto = {
            nome: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
        };
        console.log(objProduto);


        const retornoAPI = await api.post("/Produtos", objProduto);
        const produtoCadastrado = await retornoAPI.data;
        setListaProdutos([...listaProdutos, produtoCadastrado]);
        limparFormulario();
    }

    function limparFormulario() {
        setIdEditar(0)
        setTitulo("")
        setDescricao("")
        setPreco(0)
        setImagem("")
    }

    const deletar = async (id) => {
        const retornoAPI = await api.delete(`/Produtos/${id}`, {
        })
        const produtoCadastrado = await retornoAPI.data();
        setListaProdutos(listaProdutos.filter(produto => produto.id !== id))
        getDados()
    }

    const editarProduto = async (e) => {
        e.preventDefault()

        if (
            titulo.trim().length === 0 ||
            descricao.trim().length === 0 ||
            isNaN(preco)
        ) {
            alert("Preencha todos os campos!");
            return;
        }

        const objProduto = {
            nome: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
        }


        try {
            const retornoAPI = await api.put(`/Produtos/${idEditar}`, objProduto )

            const produtoAtualizado = await retornoAPI.data

            setListaProdutos(
                listaProdutos.map((produto) =>
                    produto.id === idEditar ? produtoAtualizado : produto
                )
            )
            setEditar(false)
            setIdEditar(null)
            limparFormulario()


        } catch (error) {
            alert("Deu erro ao alterar os dados, possivel servidor fora do ar")
        }
    };


    return (
        <>

            <form action="" method="post" onSubmit={editar ? editarProduto : cadastrarProduto} className="secao-cadastro">
                <fieldset className="cadastro">
                    <div>
                        <label htmlFor="produto">Nome:</label>
                        <input

                            type="text"
                            id="produto"
                            className="cadastro__entrada"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            className="cadastro__entrada"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            className="cadastro__entrada"
                            value={isNaN(preco) ? 0 : preco}
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            className="cadastro__entrada"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    {editar && (<button onClick={() => {
                        setEditar(false);
                        limparFormulario()
                    }}
                    >
                        Calcelar</button>)}


                    <button type="submit" className="cadastro__btn-cadastrar">Salvar</button>
                </fieldset>

                <section className="secao-produtos">
                    {listaProdutos.map((p) => {
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

                                <button
                                    type="button"
                                    onClick={(e) => { e.preventDefault(); deletar(p.id) }}
                                    className="cadastro__btn-cadastrar">
                                    Deletar
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        //preenche os campos do formulario

                                        setEditar(true)
                                        setIdEditar(p.id)
                                        setTitulo(p.nome)
                                        setDescricao(p.descricao)
                                        setPreco(p.preco)
                                    }}
                                    className="cadastro__btn-cadastrar">

                                    Editar
                                </button>
                            </figure>
                        )
                    })}
                </section>


            </form>
        </>

    )
}