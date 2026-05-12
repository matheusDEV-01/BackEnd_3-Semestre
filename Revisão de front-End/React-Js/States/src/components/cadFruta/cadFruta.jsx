import "./cadFruta.css"
import { useState } from "react"; // useState é um hook do React que permite adicionar estado a um componente funcional. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizar esse valor. No exemplo acima, estamos usando useState para criar um estado chamado "nome" com o valor inicial "Google". A função setNome é usada para atualizar o valor de "nome" quando necessário.


function CadFruta() {
    //states, variáveis e funções

    //states do formulário
    const [fruta, setFruta] = useState("") // Aqui estamos usando o hook useState para criar um estado chamado "fruta" com o valor inicial "". A função setFruta é usada para atualizar o valor de "fruta" quando necessário.
    const [quantidade, setQuantidade] = useState(0) // Aqui estamos usando o hook useState para criar um estado chamado "quantidade" com o valor inicial 0. A função setQuantidade é usada para atualizar o valor de "quantidade" quando necessário.
    const [listaFrutas, setListaFrutas] = useState([
        { id: 1, nome: "Banana", quantidade: 12 },
        { id: 2, nome: "Laranja", quantidade: 23 },
    ]) // Aqui estamos usando o hook useState para criar um estado chamado "listaFrutas" com o valor inicial []. A função setListaFrutas é usada para atualizar o valor de "listaFrutas" quando necessário.


    function cadastrar(e) {
        e.preventDefault() // Aqui estamos usando o método preventDefault para evitar que o formulário seja enviado e a página seja recarregada quando o botão de cadastro for clicado. Isso permite que possamos lidar com o envio dos dados da fruta de forma personalizada, sem recarregar a página.

        setListaFrutas([

            ...listaFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }
        ])

        //Após cadastrar, limpar os campos do formulário
        limparFormulario()

        return false
    }

    //Lismpa o formulário
    function limparFormulario() {
        setFruta("")
        setQuantidade(0)
    }

    return (


        <section className="sessao-cadastro">
            <h1>Cadastro</h1>

            <form action="" method="post" onSubmit={cadastrar}> {/* Aqui estamos usando um formulário para permitir que o usuário envie os dados da fruta. O evento onSubmit é acionado quando o formulário é enviado, e a função handleSubmit é chamada para lidar com o envio dos dados. */}
                <fieldset className="cadastro">
                    <label
                        htmlFor="fruta"
                        className="cadastro__rotulo">
                    </label>
                    <input
                        type="text"
                        id="fruta"
                        className="cadastro__entrada"
                        onChange={(e) => setFruta(e.target.value)}
                    />
                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                    <br />
                    <label htmlFor="">{fruta}</label>
                    <br />
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input
                        type="number"
                        id="quantidade"
                        className="cadastro__entrada"
                        onChange={(e) => setQuantidade((e.target.value))} // Aqui estamos usando um input de número para permitir que o usuário digite a quantidade da fruta. O evento onChange é acionado sempre que o valor do input muda, e a função setQuantidade é chamada com o valor atual do input (e.target.value) para atualizar o estado "quantidade".
                    />

                    <ul className="listagem">

                        {listaFrutas.map((f) => {

                            return <li key={f.id}>
                                Fruta: {f.nome} | Quantidade: {f.quantidade}
                            </li>;

                        })}

                    </ul>

                </fieldset>

            </form>

        </section>


    )
}

export default CadFruta;