import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { use, useState } from "react"
import api from "../../services/services"
import { useEffect } from "react"
import Botao from "../../components/botao/Botao"
import { Alerta } from "../../components/alerta/alerta"

//biblioteca de alertas
import Swal from "sweetalert2"


const CadastroGenero = () => {

    //states e variáveis
    const [valor, setValor] = useState("")

    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)

    const [listaGeneros, setListaGeneros] = useState([]);

    //ciclo de vida e funções

    //POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();
        //validação dos dados preenchidos
        if (valor.trim().length == 0) {

            Alerta({

                title: "Cadastro de Gênero",
                text: "Gênero deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "OK"
            } )


            // <Alerta
            //     title= "Cadastro de Gênero"
            //         text= "Gênero deve ser preenchido antes de cadastrar!"
            //             icon= "warning"
            //                 />
            return false
        }

        const objCadastro = {
            nome: valor
        }



        try {
            //Cadastra na api, no endpoint na swagger
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status == 201) {
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Gênero  cadastrado com sucesso!",
                    icon: "success"
                })

            } else {
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Houve algum problema ao cadastrar",
                    icon: "error"
                })

            }
        } catch (error) {
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })


        }

        limparFormulario()
    }


    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
    }

const excluirGenero = async (item) => {

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

            await api.delete(`/Genero/${item.idGenero}`)

            // remove da lista na tela
            const novaLista = listaGeneros.filter(
                genero => genero.idGenero !== item.idGenero
            )

            setListaGeneros(novaLista)

            Alerta({
                title: "Excluir Gênero",
                text: "Gênero excluído com sucesso!",
                icon: "success",
                confirmButtonText: "OK"
            })

        } catch (error) {

            console.log(error)

            Alerta({
                title: "Excluir Gênero",
                text: "Erro ao excluir o gênero :(",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    }
    
    const preEditar = (item) => {

        //jogar os dados no formulario



        setIdEditar(item.idGenero)
        setValor(item.nome)
        setEditar(true)
        console.log(item)
        console.log(idEditar)
    }




    const editarGenero = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Agora sim!",
            text: `Editar: ${valor} | id: ${idEditar}`,
            icon: "success",
        })
        try {

            const objEditar = {
                nome: valor
            }

            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 200) {
                Swal.fire({
                    title: "Cadastro de Gênero",
                    text: "Gênero editado com sucesso!",
                    icon: "success"
                })
                limparFormulario()
                getGeneros
            }


        } catch (error) {
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Erro na chamada da API",
                icon: "error"
            })
        }
        limparFormulario()
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
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}

                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />



            </main>

            <Footer />
        </>


    )
}

export default CadastroGenero