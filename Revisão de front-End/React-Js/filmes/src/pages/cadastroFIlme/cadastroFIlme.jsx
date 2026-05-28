import "./cadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { Alerta } from "../../components/alerta/alerta"


import { useState, useEffect } from "react"

import api from "../../services/services"

import Swal from "sweetalert2"


const CadastroFilme = () => {

    //states e variáveis

    const [listaFilmes, setListaFilmes] = useState([]);
    const [valor, setValor] = useState("")
    const [valorSelect, setValorSelect] = useState("")
    const [listaGeneros, setListaGeneros] = useState([]);
    const [idEditar, setIdEditar] = useState("")
    const [imagem, setImagem] = useState(null)
    const [editar, setEditar] = useState(false)


    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
    }

    // CADASTRAR

    const cadastrarFilme = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            Swal.fire({
                title: "Cadastro de Filme",
                text: "Título deve ser preenchido!",
                icon: "warning"
            })

            return
        }

        const formData = new FormData()

        formData.append("Nome", valor)

        formData.append("IdGenero", valorSelect)

        formData.append("Imagem", imagem)

        try {



            const retornoAPI = await api.post("/Filme", formData)

            if (retornoAPI.status === 201) {

                Swal.fire({
                    title: "Cadastro de Filme",
                    text: "Filme cadastrado com sucesso!",
                    icon: "success"
                })

                getFilmes()
                limparFormulario()
            }

        } catch (error) {

            console.log(error.response?.status)
            console.log(error.response?.data)
            console.log(error)

            Swal.fire({
                title: "Cadastro de Filme",
                text: "Erro ao cadastrar filme",
                icon: "error"
            })
        }
    }



    const excluirFilme = async (item) => {

        const result = await Alerta({
            title: "Você tem certeza?",
            text: "Você não poderá reverter isso!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d6a100ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        })

        // se clicar em cancelar
        if (!result.isConfirmed) {
            return
        }

        try {

            await api.delete(`/Filme/${item.idFilme}`)

            const novaLista = listaFilmes.filter(
                filme => filme.idFilme !== item.idFilme
            )

            setListaFilmes(novaLista)

            Alerta({
                title: "Excluir Filme",
                text: "Filme excluído com sucesso!",
                icon: "success",
                confirmButtonText: "OK"
            })

        } catch (error) {

            Alerta({
                title: "Excluir Filme",
                text: "Erro ao excluir filme :(",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    }




    const preEditar = (item) => {
        //jogar os dados no formulario
        setIdEditar(item.idFilme)
        setValor(item.titulo)
        setEditar(true)
        console.log(item)
        console.log(idEditar)
    }

    const editarFilme = async (e) => {

        e.preventDefault()


        // FORMDATA
        const formData = new FormData()

        formData.append("idFilme", idEditar)

        formData.append("Imagem", imagem)

        formData.append("Nome", valor)

        formData.append("idGenero", valorSelect)

        try {

            const retornoAPI = await api.put(`/Filme/${idEditar}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            if (retornoAPI.status === 200) {

                Swal.fire({
                    title: "Editar Filme",
                    text: "Filme editado com sucesso!",
                    icon: "success"
                })

                getFilmes()
                limparFormulario()
            }
        } catch (error) {
            aalert("Erro na chamada da API")
        }
        limparFormulario()
    }

    useEffect(() => {
        getFilmes()
    }, [])

    const getFilmes = async () => {

        try {

            const retornoAPI = await api.get("/Filme")
            const dados = retornoAPI.data //extrai os dados retornados
            setListaFilmes(dados)

        } catch (error) {

            Swal.fire({
                title: "Cadastro de Filme",
                text: "Erro ao buscar filmes",
                icon: "error"
            })
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
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Erro ao retornar os dados",
                icon: "error"
            })

        }
    }


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    valor={valor}
                    listaGeneros={listaGeneros}
                    valorSelect={valorSelect}
                    setValorSelect={setValorSelect}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}
                    setImagem={setImagem}


                />

                <Lista
                    tituloLista="Lista de Filme"

                    //Chama o método para validar:
                    lista={listaFilmes}
                    //Identifica o tipo de lista:
                    tipoLista="filme"

                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                    cancelarEdicao={limparFormulario}



                />



            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme