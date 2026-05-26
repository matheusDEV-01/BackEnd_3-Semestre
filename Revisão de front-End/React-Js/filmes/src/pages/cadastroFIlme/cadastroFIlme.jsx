import "./cadastroFilme.css"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react"
import api from "../../services/services"


const CadastroFilme = () => {

    //states e variáveis

    const [listaFilmes, setListaFilmes] = useState([]);
    const [valor, setValor] = useState("")

    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)




    const cadastrarFilme = async (e) => {
        e.preventDefault();
        //validação dos dados preenchidos
        if (valor.trim().length == 0) {

            alert("Filme deve ser preenchido antes de cadastrar!")
            return false
        }

        const objCadastro = {
            nome: valor
        }



        try {
            //Cadastra na api, no endpoint na swagger
            const retornoAPI = await api.post("/Filme", objCadastro)

            if (retornoAPI.status == 201) {
                alert(`Filme  cadastrado com sucesso!`)
            } else {
                alert("Houve algum problema ao cadastrar")
            }
        } catch (error) {
            alert("Erro na chamada da API")

        }

        limparFormulario()

    }


    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
    }

    const excluirFilme = async (item) => {
        if (!confirm(`Deseja realmente apagar o filme (${item.nome})`)) {
            return false
        }

        try {
            await api.delete(`/Filme/${item.idFilme}`)
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {
                console.log(retornoAPI)
                alert("Apagado com sucesso")
                getFilmes();;
            }
        } catch (error) {
            alert("Erro ao excluir o filme")
        }

    }

    const preEditar = (item) => {

        //jogar os dados no formulario



        setIdEditar(item.idFilme)
        setValor(item.nome)
        setEditar(true)
        console.log(item)
        console.log(idEditar)
    }

    const editarFilme = async (e) => {
        e.preventDefault()
        alert(`Agora sim, editar: ${valor} | id: ${idEditar}`)
        try {

            const objEditar = {
                nome: valor
            }

            const retornoAPI = await api.put(`/Filme/${idEditar}`, objEditar)
            if (retornoAPI.status == 200) {
                alert("Gênero editado com sucesso!")
                limparFormulario()
                getFilmes()
            }


        } catch (error) {
            aalert("Erro na chamada da API")
        }
        limparFormulario()
    }

    useEffect(() => {
        //chamar os dados da api
        getFilmes()
    }, [])

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("./Filme") //chama a api
            const dados = retornoAPI.data //extrai os dados retornados
            setListaFilmes(dados) //guarda os dados no state(já existe na lista)
        } catch (error) {
            alert("Erro ao retornar os dados")
        }
    }

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    visibilidade="none"
                    placeholder="filme"
                    valor={valor}

                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}
                />

                <Lista
                    tituloLista="Lista de Filme"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaFilmes}
                    //Identifica o tipo de lista:
                    tipoLista="filme"

                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}



                />



            </main>

        </>
    )
}

export default CadastroFilme