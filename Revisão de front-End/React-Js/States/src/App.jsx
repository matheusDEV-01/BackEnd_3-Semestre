import { useState } from "react"; // useState é um hook do React que permite adicionar estado a um componente funcional. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizar esse valor. No exemplo acima, estamos usando useState para criar um estado chamado "nome" com o valor inicial "Google". A função setNome é usada para atualizar o valor de "nome" quando necessário.
import Contador from "./components/contador/contador";

function App() {
  const [nome, setNome] = useState("Google") // Aqui estamos usando o hook useState para criar um estado chamado "nome" com o valor inicial "Google". A função setNome é usada para atualizar o valor de "nome" quando necessário.


function mudarTexto() {
  setNome("Microsoft") // Aqui estamos usando a função setNome para atualizar o valor de "nome" para "Microsoft" quando a função mudarTexto é chamada.
}

function fuiAbandonado() {
  setNome("Input foi abandonado") // Aqui estamos criando uma função chamada fuiAbandonado que exibe um alerta com a mensagem "Fui abandonado" quando é chamada.
}

  return (
    <>
    <h1>{nome}Page</h1>
    <button onClick={mudarTexto}>Mudar Texto</button>
    <button onClick={() => setNome("Yahoo")}>Mudar Texto</button>

    <br />
    
    <input type="text" onBlur={fuiAbandonado} onChange={(e) => setNome(e.target.value)} /> {/* Aqui estamos usando um input de texto para permitir que o usuário digite um novo valor para "nome". O evento onChange é acionado sempre que o valor do input muda, e a função setNome é chamada com o valor atual do input (e.target.value) para atualizar o estado "nome". */}
   
   <Contador />
    </>



  )
}
export default App;