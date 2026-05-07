//Distructuring
function Title({ Nome, Sobrenome, texto }) {
  return (
    <h1>{texto}
      <br />
      {Nome}  <br />
      {Sobrenome}
    </h1>
  );
}

export default Title