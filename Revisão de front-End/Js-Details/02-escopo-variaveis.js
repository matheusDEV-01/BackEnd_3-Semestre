const nome = `João`;

let sobrenome = `Felix`;

{
    const nome = `Maria`; // Variável de escopo local, só pode ser acessada dentro deste bloco
    let sobrenome = `Silva`; // Variável de escopo global, pode ser acessada fora do bloco

    console.log(` Nome Completo: ${nome} ${sobrenome}`);
}

sobrenome = 600.97;
sobrenome = true;
console.log(` Nome Completo: ${nome} ${sobrenome}`);




const nomes = [ "Eduardo", "Felix"]; // Variável de escopo global, pode ser acessada fora do bloco
for (var i = 0; i < nomes.length; i++) { // Variável de escopo local, só pode ser acessada dentro deste bloco
    console.log(` Nome ${i}: ${nomes[i]}`);
}
console.log(i)