import "./card-perfil.css";
import people from "../../assets/download (1).jpg";

function CardPerfil() {

return (
<div className="card-perfil">

    <img className="card-perfil__image"
          src={people}
          alt="foto de perfil do usuário"/>

</div>
);
}
export default CardPerfil;


//ReactJs
//Componentes
//Podem receber dados como parametros (props)
//Separar os componentes e montar nossa interface
//com os componentes reutilizáveis