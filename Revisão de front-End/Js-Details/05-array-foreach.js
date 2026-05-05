const hobbies =[ // Array de hobbies
    "Correr",
    "Nadar",
    "Viajar",
    "Lutar",
    "Jogar",
    "Musica",
    "Ler Livros",
    "Dormir"
]

hobbies.forEach( // O método forEach() executa uma função para cada elemento do array.
function(hobby){ // A função é chamada para cada elemento do array, e o elemento atual é passado como argumento para a função.
    console.log(hobby); // Imprime o hobby atual no console.
 }
);