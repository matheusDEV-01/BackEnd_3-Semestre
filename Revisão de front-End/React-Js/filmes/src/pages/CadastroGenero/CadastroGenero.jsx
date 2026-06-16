import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "/src/services/services";
import { Alerta } from "../../components/alerta/Alerta";

const CadastroGenero = () => {
    const [valor, setValor] = useState("");
    const [listaGeneros, setListaGeneros] = useState([]);
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    const limparFormulario = () => {
        setValor("");
        setEditar(false);
        setIdEditar(null);
    };

    // POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: "Atenção",
                text: "O nome do gênero não pode estar em branco.",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        }

        const objCadastro = {
            Nome: valor,
        };

        try {
            await api.post("/Genero", objCadastro);

            limparFormulario();
            getGeneros();

            Alerta({
                title: "Cadastro realizado com sucesso!",
                text: "O gênero foi cadastrado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro na chamada da API",
                text: "Verifique os dados e tente novamente!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    // DELETE
    const excluirGenero = async (item) => {
        const result = await Alerta({
            title: "Excluir Gênero",
            text: `Tem certeza que deseja excluir o gênero ${item.nome}?`,
            icon: "warning",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            showCancelButton: true,
            confirmButtonColor: "#85f085ff",
            cancelButtonColor: "#ff6666ff",
        });

        if (!result.isConfirmed) return;

        try {
            await api.delete(`/Genero/${item.idGenero}`);

            getGeneros();
            limparFormulario();

            Alerta({
                title: "Excluído!",
                text: `O gênero ${item.nome} foi excluído com sucesso!`,
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro",
                text: "Erro ao excluir gênero!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    // PRE EDITAR
    const preEditar = (item) => {
        setValor(item.nome);
        setIdEditar(item.idGenero);
        setEditar(true);
    };

    // PUT
    const editarGenero = async (e) => {
        e.preventDefault();

        const objCadastro = {
            idGenero: idEditar,
            nome: valor,
        };

        try {
            await api.put(`/Genero/${idEditar}`, objCadastro);

            limparFormulario();
            getGeneros();

            Alerta({
                title: "Sucesso",
                text: "Gênero editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro na chamada da API",
                text: "Verifique os dados e tente novamente!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    // GET
    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            setListaGeneros(retornoAPI.data);
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro na chamada da API",
                text: "Verifique os dados e tente novamente!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    useEffect(() => {
        getGeneros();
    }, []);

    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    placeholder="gênero"
                    valor={valor}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    Editar={editar}
                    cancelarEdicao={limparFormulario}

                    // props vazias para não quebrar o componente reutilizado
                    listaGeneros={[]}
                    valorSelect=""
                    setValorSelect={() => {}}
                    setImg={() => {}}
                    visibilidade="none"
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    tipoLista="genero"
                    lista={listaGeneros}
                    funcEditar={preEditar}
                    funcExcluir={excluirGenero}
                />
            </main>

            <Footer />
        </>
    );
};

export default CadastroGenero;