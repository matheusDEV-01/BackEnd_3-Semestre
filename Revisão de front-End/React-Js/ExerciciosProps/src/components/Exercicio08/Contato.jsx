// 08) Crie um componente chamado Contato que receba:
// nome
// telefone
// email
// Depois:
// Crie uma lista com 5 contatos
// Exiba todos utilizando o componente

import "./Contato.css";

export const Contato = ({ nome, telefone, email }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
      <hr />
    </div>
  );
}