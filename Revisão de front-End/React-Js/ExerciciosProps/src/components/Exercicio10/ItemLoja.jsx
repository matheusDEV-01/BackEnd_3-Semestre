// 10 ) Crie um componente chamado ItemLoja que receba:
// nome
// preco
// categoria
// estoque
// Regras:
// Se o estoque for maior que 0, mostrar: Produto disponível
// Caso contrário: Produto indisponível

import "./ItemLoja.css";

const ItemLoja = ({ nome, preco, categoria, estoque }) => {
    if (estoque > 0) {
        return (
            <div className="item-loja">
                <h2>{nome}</h2>
                <p>Preço: R$ {preco}</p>
                <p>Categoria: {categoria}</p>
                <p className="disponivel">Produto disponível</p>
            </div>
        );
    } else {
        return (
            <p>
                <h2>{nome}</h2>
                <p>Preço: R$ {preco}</p>
                <p>Categoria: {categoria}</p>
                <p className="indisponivel">Produto indisponível</p>
            </p>
        );
    }
}

export default ItemLoja;