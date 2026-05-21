import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { use, useState } from "react"
import api from "../../services/services"
import { useEffect } from "react"


const CadastroGenero = () => {

    //states e variáveis
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([

    ]);



    //ciclo de vida e funções

    //POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();
        //validação dos dados preenchidos
        if (valor.trim().length == 0) {

            alert("Gênero deve ser preenchido antes de cadastrar!")
            return false
        }

        const objCadastro = {
            nome: valor
        }

        const formData = new FormData();

        formData.append("Nome", valor);

        try {
            //Cadastra na api, no endpoint na swagger
            const retornoAPI = await api.post("/Genero", formData)

            if (retornoAPI.status == 201) {
                alert("Gênero cadastrado com sucesso!")
            } else {
                alert("Houve algum problema ao cadastrar")
            }
        } catch (error) {
            alert("Erro na chamada da API")

        }
    }

    const limparFormulario = () => {
        setValor("")
    }


    const excluirGenero = async (item) => {
        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
        } catch (error) {
            alert("Erro ao excluir o gênero")
        }

    }

    const editarGenero = async (item) => {
        try {
          const formData = new FormData();
          formData.append("IdGenero", item.idGenero);
          formData.append("Nome", valor);
            
        } catch (error) {
            alert("Erro ao editar o gênero")
        }
    }

    useEffect(() => {
        //chamar os dados da api
        getGeneros()
    }, [listaGeneros])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("./Genero") //chama a api
            const dados = retornoAPI.data //extrai os dados retornados
            setListaGeneros(dados) //guarda os dados no state(já existe na lista)
        } catch (error) {
            alert("Erro ao retornar os dados")
        }
    }


    //o jsx


    return (
        <>
            <Header />
            <main>
                <Cadastro

                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}

                    // função que muda o state
                    setValor={setValor}
                    funcCadastro={cadastrarGenero}

                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirGenero}
                    funcEditar={editarGenero}
                />



            </main>

            <Footer />
        </>


    )
}

export default CadastroGenero