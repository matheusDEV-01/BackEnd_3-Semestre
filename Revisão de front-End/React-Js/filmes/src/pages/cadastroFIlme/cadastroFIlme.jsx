import "./CadastroFilme.css";
import Header from "../../components/header/Header";
import Fotter from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import api from "/src/services/services";
import { Alerta } from "../../components/alerta/Alerta";
import { useEffect, useState } from "react";

const CadastroFilme = () => {
    const [listaGeneros, setListaGeneros] = useState([]);
    const [img, setImg] = useState([]);
    const [valor, setValor] = useState("");
    const [listaFilmes, setListaFilmes] = useState([]);
    const [editar, setEditar] = useState(false);
    const [idEditar, setIdEditar] = useState(null);
    const [valorSelect, setValorSelect] = useState("");

    const limparFormulario = () => {
        setValor("");
        setValorSelect("");
        setImg([]);
        setEditar(false);
        setIdEditar(null);
    };

    // POST
    const cadastrarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: "Atenção",
                text: "O nome do filme não pode estar em branco.",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        }

        const formData = new FormData();

        formData.append("Nome", valor);
        formData.append("IdGenero", valorSelect);
        formData.append("Imagem", img);

        try {
            await api.post("/Filme", formData);

            limparFormulario();
            getFilmes();

            Alerta({
                title: "Cadastro realizado com sucesso!",
                text: "O filme foi cadastrado com sucesso!",
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

    // Preencher formulário para editar
    const preEditar = (item) => {
        setValor(item.titulo);
        setValorSelect(item.idGenero);
        setIdEditar(item.idFilme);
        setImg(item.imagem);
        setEditar(true);
    };

    // PUT
    const editarFilme = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("Nome", valor);
        formData.append("IdGenero", valorSelect);
        formData.append("Imagem", img);

        try {
            await api.put(`/Filme/${idEditar}`, formData);

            limparFormulario();
            getFilmes();

            Alerta({
                title: "Sucesso",
                text: "Filme editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro",
                text: "Erro ao editar filme!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    // DELETE
    const excluirFilme = async (item) => {
        const result = await Alerta({
            title: "Excluir Filme",
            text: `Tem certeza que deseja excluir o filme ${item.titulo}?`,
            icon: "warning",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            showCancelButton: true,
            confirmButtonColor: "#85f085ff",
            cancelButtonColor: "#ff6666ff",
        });

        if (!result.isConfirmed) return;

        try {
            await api.delete(`/Filme/${item.idFilme}`);

            getFilmes();
            limparFormulario();

            Alerta({
                title: "Excluído!",
                text: `O filme ${item.titulo} foi excluído com sucesso!`,
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);

            Alerta({
                title: "Erro",
                text: "Erro ao excluir filme!",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            setListaGeneros(retornoAPI.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme");
            setListaFilmes(retornoAPI.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getGeneros();
        getFilmes();
    }, []);

    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filmes"
                    placeholder="filme"
                    listaGeneros={listaGeneros}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    Editar={editar}
                    cancelarEdicao={limparFormulario}
                    valor={valor}
                    setValor={setValor}
                    valorSelect={valorSelect}
                    setValorSelect={setValorSelect}
                    setImg={setImg}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    tipoLista="filme"
                    lista={listaFilmes}
                    funcEditar={preEditar}
                    funcExcluir={excluirFilme}
                />
            </main>

            <Fotter />
        </>
    );
};

export default CadastroFilme;