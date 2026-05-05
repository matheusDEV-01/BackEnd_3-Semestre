const hobbies =[ // Array de hobbies
    "Correr",
    "Nadar",
    "Viajar",
    "Lutar",
    "Jogar",
    "Musica",
    "Ler Livros",
    "Dormir"
];

//Utilizado para iterar arrays e retornar um novo array, compondo um novo resultado para cada indice do array antigo
 
const novosHobbies = hobbies.map((hob) => { // A função é chamada para cada elemento do array, e o elemento atual é passado como argumento para a função.
    return `<p>${hob}</p>`; // Retorna o hobby atual.
});

console.log(novosHobbies); // Imprime o novo array de hobbies no console.