// String
// Boolean
// Int
// Char
// Array
// class 
// Object


let frutasVermelhas = new Array();
let frutasCitricas = ["Limão", "Abacaxi", "Maracujá", "Acerola", "Tangerina"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Framboesa");
frutasVermelhas.push("Tomate");
frutasVermelhas.push("Cereja");

console.log(frutasVermelhas);
console.log(frutasCitricas);

let frutaRemovida = frutasVermelhas.pop();// Remove o último item do array
console.log(frutaRemovida);
console.log(frutasVermelhas);



// let nome = "Maria Silva";

// console.log(nome.indexOf("5")); // Retorna -1, pois o caractere "5" não existe na string "Maria Silva"