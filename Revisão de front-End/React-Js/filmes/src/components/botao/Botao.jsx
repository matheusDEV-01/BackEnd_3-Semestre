import "./Botao.css";

const Botao = (props) => {
<<<<<<< HEAD
    return (
        <button
            className="botao"
            type={props.type}
            onClick={props.onClick}
        >
            {props.nomeDoBotao}
        </button>
    );
};
=======
    return(

        <button className="botao" type={props.Editar ? "button" : "submit"}
        onClick={(e) => {
             e.preventDefault();
            if(props.setEditar){
                props.cancelarEdicao();
                return false;
            }
            if (props.onClick) {
                    props.onClick(e);
            }
        }}
        >{props.nomeDoBotao}</button>

    )
}
>>>>>>> de0775d2b52858fa7568e13b8be20538e9ebe717

export default Botao;