// DESAFIO EXTRA:

// Crie um componente chamado Pessoa que receba:
// nome
// idade
// cidade
// foto
// Depois:
// Crie um array de objetos pessoas com pelo menos 3 pessoas cadastradas com id, nome, sobrenome, idade, cidade, foto (utilize os avatares em anexo).
// Utilize .map() para renderizar várias pessoas dinamicamente a partir de um array.
import "./Pessoa.css";

const Pessoa = ({ nome, idade, cidade, foto }) => {
    return (
        <div className="pessoa">
            <img src={foto} alt={nome} />
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Cidade: {cidade}</p>
        </div>
    );
};

export default Pessoa;