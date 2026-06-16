import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />

                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder={`Digite o nome do ${props.placeholder}`}
                            value={props.valor}
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero">
                        <label htmlFor="genero">Gênero</label>
                        <select
                            name="genero"
                            value={props.valorSelect}
                            onChange={(e) => props.setValorSelect(e.target.value)}
                        >
                            <option value="" disabled>
                                Selecione
                            </option>

                            {props.listaGeneros?.map((item) => (
                                <option key={item.idGenero} value={item.idGenero}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo_cad_img">
                        <label htmlFor="img">Imagem</label>

                        <label htmlFor="img" className="custom-file-upload">
                            Escolher imagem
                        </label>

                        <input
                            type="file"
                            name="img"
                            id="img"
                            accept="image/*"
                            onChange={(e) => props.setImg(e.target.files[0])}
                        />
                    </div>

                    {props.Editar && (
                        <Botao
                            nomeDoBotao="Cancelar"
                            type="button"
                            onClick={props.cancelarEdicao}
                        />
                    )}

                    <Botao
                        nomeDoBotao={props.Editar ? "Salvar" : "Cadastrar"}
                        type="submit"
                    />
                </div>
            </form>
        </section>
    );
};

export default Cadastro;