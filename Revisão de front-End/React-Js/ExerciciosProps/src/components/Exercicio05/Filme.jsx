import "./Filme.css";

const Filme = ({ titulo, ano, diretor }) => {
  return (
    <p>
      {titulo} <br />
      Ano: {ano} <br />
      Diretor: {diretor}
    </p>
  );
};

export default Filme;