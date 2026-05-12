import "./contador.css";
import { useState } from "react";

const Contador = () => {
  const [valor, setvalor] = useState(0) // Aqui estamos usando o hook useState para criar um estado chamado "contador" com o valor inicial 0. A função setContador é usada para atualizar o valor de "contador" quando necessário.


function Incremento() {
   if (valor == 10) {
    setvalor(0) // Aqui estamos usando a função setContador para atualizar o valor de "contador" para 0 quando o valor do contador chegar a 10.
  }else{
    setvalor(valor + 1) // Aqui estamos usando a função setContador para atualizar o valor de "contador" para 0 quando o valor do contador for menor que 10.
  }
}

//criar um função decremento
function Decremento() {
  if (valor > 0) {
  setvalor(valor - 1) // Aqui estamos usando a função setContador para atualizar o valor de "contador" para o valor atual do contador (contador) menos 1 quando a função Decremento é chamada.
  }else {
  setvalor(0) // Aqui estamos usando a função setContador para atualizar o valor de "contador" para 0 quando o valor do contador for menor ou igual a 0.
 }
}

 //toda vez que o contador chegar a 10 você deve reiniciar
 
  




  return (
    <>
      <p>Contagem: {valor}</p>
      <button onClick={Decremento}>--</button> {/* Aqui estamos usando um botão para diminuir o valor do contador. O evento onClick é acionado quando o botão é clicado, e a função setContador é chamada com o valor atual do contador (valor) menos 1 para atualizar o estado "contador". */}
      <br />
      <button onClick={Incremento}>++</button>

    </>
  )
}
export default Contador;