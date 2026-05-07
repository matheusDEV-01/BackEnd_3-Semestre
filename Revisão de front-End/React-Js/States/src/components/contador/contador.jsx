import "./contador.css";
import { useState } from "react";

const Contador = () => {
  const [valor, setvalor] = useState(0) // Aqui estamos usando o hook useState para criar um estado chamado "contador" com o valor inicial 0. A função setContador é usada para atualizar o valor de "contador" quando necessário.
  return (
    <>
    <p>Contagem: {valor}</p>
    <button onClick={() =>{ return setvalor(valor + 1)}}>++</button> {/* Aqui estamos usando um botão para aumentar o valor do contador. O evento onClick é acionado quando o botão é clicado, e a função setContador é chamada com o valor atual do contador (valor) mais 1 para atualizar o estado "contador". */}

    </>
    )
}
export default Contador;