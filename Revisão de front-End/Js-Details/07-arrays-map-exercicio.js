const numeros = [
    50,
    20,
    30,
    10,
    40,
    67,
    99,
    344
]

//rodar o map gerando um novo array com o dobro dos numeros do original

const numerosDobro = numeros.map((num) => { // O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.
    return num * 2; // Retorna o dobro do número atual.
});

console.log();//pula uma linha
console.log('Array Modificado:'); // Imprime o novo array de números dobrados no console.
console.log();//pula uma linha

//após, exibar o valores do arrey dobro no console utilizando o forEach
let textoResultado = "";
numerosDobro.forEach((num) => {
    textoResultado += `${num} | `//acumula texto em uma string (sem pular linha)
}); 


textoResultado = textoResultado.substring(0, textoResultado.length - 2);
console.log(textoResultado); 
