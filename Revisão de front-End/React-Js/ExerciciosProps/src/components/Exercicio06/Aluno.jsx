// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso

import "./Aluno.css";


const Aluno = ({ nome, curso, imagem }) => {
return(
    <div className=".card-perfil">
      <img src={imagem} alt={nome} className=".card-perfil__image" />
      <h3>{nome}</h3>
      <p>{curso}</p>
    </div>
)
}

export default Aluno;