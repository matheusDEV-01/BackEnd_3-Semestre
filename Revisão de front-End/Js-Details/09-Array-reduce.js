const produtos = [
    {
        descricao: "camisa Polo",
        cor: "verde",
        preco: 49.99,
        perfil: "F",
        quantidade: 10,
        promocao: true
    },
    {
        descricao: "camisa Polo",
        cor: "Amarela",
        preco: 49.99,
        perfil: "M",
        quantidade: 10,
        promocao: true
    },
    {
        descricao: "camisa Polo",
        cor: "Azul",
        preco: 49.99,
        perfil: "M",
        quantidade: 100,
        promocao: false
    },
    {
        descricao: "camisa Polo",
        cor: "Roxo",
        preco: 49.99,
        perfil: "F",
        quantidade: 5,
        promocao: false
    },

]

// reduz o array a um único elementos.No caso um somatório, por exemplos
let totalPreco = 0;

let totalEstoque = produtos.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
    
}, 0);

console.log(`Voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R$${totalPreco.toFixed(2)}`)