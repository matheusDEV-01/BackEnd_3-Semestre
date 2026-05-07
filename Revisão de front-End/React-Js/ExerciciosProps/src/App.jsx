import "./App.css";
import MyComponent from "./components/children/mycomponent";
import Saudacao from "./components/Exercicio01/saudacao";
import Produto from "./components/Exercicio02/Produto";
import Perfil from "./components/Exercicio03/Perfil";
import Botao from "./components/Exercicio04/Botao";
import Filme from "./components/Exercicio05/Filme";
import Aluno from "./components/Exercicio06/Aluno";
import Pessoa from "./components/DESAFIO EXTRA/Pessoa";


import { Contato } from "./components/Exercicio08/Contato";

import { Card } from "./components/Exercicio07/Card";

import people from "./assets/oi.webp";
// import people from "./assets/images.webp";
import Jogo from "./components/Exercicio09/Jogo";
import ItemLoja from "./components/Exercicio10/ItemLoja";

const App = () => {

  // const pessoas = [
  //   {
  //     id: 1,
  //     nome: "Alice",
  //     idade: 30,
  //     profissao: "Engenheira de Software"
  //   },
  //   {
  //     id: 2,
  //     nome: "Bob",
  //     idade: 25,
  //     profissao: "Designer Gráfico"
  //   },
  //   {
  //     id: 3,
  //     nome: "TTI",
  //     idade: 28,
  //     profissao: "Analista de Dados"
  //   }
  // ];

  //  const contatos = [
  //     {
  //       nome: "Ana",
  //       telefone: "(11) 99999-1111",
  //       email: "ana@email.com",
  //     },
  //     {
  //       nome: "Carlos",
  //       telefone: "(11) 98888-2222",
  //       email: "carlos@email.com",
  //     },
  //     {
  //       nome: "Marina",
  //       telefone: "(11) 97777-3333",
  //       email: "marina@email.com",
  //     },
  //     {
  //       nome: "Lucas",
  //       telefone: "(11) 96666-4444",
  //       email: "lucas@email.com",
  //     },
  //     {
  //       nome: "Julia",
  //       telefone: "(11) 95555-5555",
  //       email: "julia@email.com",
  //     },
  //   ];

  //   return (
  //     <div>
  //       <h1>Lista de Contatos</h1>

  //       {contatos.map((contato) => (
  //         <Contato
  //           key={contato.nome}
  //           nome={contato.nome}
  //           telefone={contato.telefone}
  //           email={contato.email}
  //         />
  //       ))}
  //     </div>
  //   );



  return (
    <>

      {/* <Saudacao nome="Alice" />
      <Saudacao nome="Bob" />
      <Saudacao nome="TTI" /> */}

      {/* <Produto
        nome="Smartphone 13 Pro Max "
        preco={1999.99}
        descricao="Um smartphone moderno com tela de alta resolução e câmera avançada."
      /> */}

      {/* <Produto
        nome="Notebook Aoc"
        preco={3499.99}
        descricao="Um notebook potente para trabalho e entretenimento, com processador de última geração."
      /> */}

      {/* <Produto
        nome="Fone de Ouvido Aoc"
        preco={299.99}
        descricao="Fones de ouvido sem fio com cancelamento de ruído e som de alta qualidade."
      /> */}

      {/* <Card>
        <Botao texto="Botão vermelho" cor="vermelho" />
        <Botao texto="Botão verde" cor="verde" />
        <Botao texto="Botão azul" cor="azul" />
      </Card > */}



      {/* <Filme titulo="O Poderoso Chefão" ano={1972} diretor="Francis Ford Coppola" />
      <Filme titulo="O Poderoso Chefão II" ano={1974} diretor="Francis Ford Coppola" />
      <Filme titulo="O Poderoso Chefão III" ano={1990} diretor="Francis Ford Coppola" /> */}

      {/* <Aluno nome="Alice" curso="Engenharia de Software" imagem={people} /> */}




      {/* {pessoas.map((pessoa) => (
        <Perfil
          key={pessoa.id} // É importante adicionar uma chave única para cada item renderizado em uma lista, para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos.
          nome={pessoa.nome}//
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      ))} */}


      {/* <Jogo
  nome="The Legend of Zelda: Breath of the Wild"
  plataforma="Nintendo Switch"
  preco={299.99}
  imagem={people}
/> */}

      {/* <ItemLoja
        nome="Notebook"
        preco={3500}
        categoria="Eletrônicos"
        estoque={5}
      />

      <ItemLoja
        nome="Mouse Gamer"
        preco={150}
        categoria="Acessórios"
        estoque={0}
      /> */}
    
  



    </>

  )

//  const pessoas = [
//     {
//       id: 1,
//       nome: "Maria Silva",
//       idade: 22,
//       cidade: "São Paulo",
//       foto: people
//     },
//     {
//       id: 2,
//       nome: "João Santos",
//       idade: 28,
//       cidade: "Rio de Janeiro",
//       foto: people
//     },
//     {
//       id: 3,
//       nome: "Ana Costa",
//       idade: 19,
//       cidade: "Curitiba",
//       foto: people
//     }
//   ]

//   return (
//     <div>
//       <h1>Lista de Pessoas</h1>

//       {pessoas.map((pessoa) => (
//         <Card
//           key={pessoa.id}
//           nome={pessoa.nome}
//           idade={pessoa.idade}
//           cidade={pessoa.cidade}
//           foto={pessoa.foto}
//         />
        
//       ))}
//     </div>
//   )


}

export default App; // O código acima não está retornando nada, é necessário adicionar um return para que o componente funcione corretamente.