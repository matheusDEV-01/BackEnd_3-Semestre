import "./Cadastro.css";
import Botao from "../botao/Botao";

// Destructuring nas props:
// const Cadastro = ({ 
//     cadastro, tituloCadastro, valor, setValor, estilo, 
//     valorSelect, setValorSelect, listaGeneros 
//   }) => {}


const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcEditar, props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder={`Digite o nome do ${props.placeholder}`}
                            //O valor do input vem de props (estado do componente pai)
                            value={props.valor}
                            // Atualiza o estado do pai ao digitar
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select name="genero" id="" value={props.valorSelect} onChange={(e) => props.setValorSelect(e.target.value)}>
                            <option value="" disabled >Selecione</option>
                            {props.listaGeneros?.map((item) => (
                                <option key={item.idGenero} value={item.idGenero}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={`campo_cad_genero campo_cad_genero--${props.temadatela}`} style={{ display: props.visibilidade }}>
                        <label htmlFor="imagem" className={`label_image label_image--${props.temadatela}`}> Selecionar Imagem </label>
                        <input className={`input_image input_image--${props.temadatela}`} type="file" id="imagem" onChange={(e) => props.setImagem(e.target.files[0])} style={{ display: "none" }} />
                    </div>




                    {/* {Botao Editar} */}
                    {
                        props.btnEditar &&
                        <Botao
                            nomeDoBotao="Cancelar"
                            cancelarEdicao={props.cancelarEdicao}
                            btnEditar={props.btnEditar}
                        />
                    }
                    <Botao nomeDoBotao="Cadastrar" />



                </div>
            </form>
        </section>
    )
}

export default Cadastro;