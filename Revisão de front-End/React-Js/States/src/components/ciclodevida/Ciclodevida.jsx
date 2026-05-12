import "./Ciclodevida.css";
import { useEffect, useState } from "react"; // useState é um hook do React que permite adicionar estado a um componente funcional. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizar esse valor. No exemplo acima, estamos usando useState para criar um estado chamado "contador" com o valor inicial 0. A função setContador é usada para atualizar o valor de "contador" quando necessário.

export default function Ciclodevida() {

const [contador, setContador] = useState(0) 

useEffect(() => {
    //quando o Componente é montado
    console.log("Componente montado") 

return () => {
    //quando o Componente é desmontado
    console.log("Componente desmontado") 
}


}, [])

useEffect(() => {
    //quando o Componente é atualizado
    console.log("Componente atualizado") 
    console.log("Valor do Contador: ", contador)

}, [contador])


return(
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() =>{ setContador(contador + 1)}}>Adicionar</button>
    </>
)

}
