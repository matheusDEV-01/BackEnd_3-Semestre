// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./Perfil.css";

const Perfil = ({ nome, idade, profissao }) => {
  return (
    <article className="CardPerfil">
      {nome} <br />
      Idade: {idade} <br />
      Profissão: {profissao}
    </article>
  );
};

export default Perfil;