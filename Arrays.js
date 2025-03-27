

const paises = ["Brasil", "Argentina", "Chile", "Uruguai"];

console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]);


console.log(paises.length); // tamanho do array

console.log(paises[paises.length - 1]); // ultimo elemento do array

console.log(paises[paises.length - 2]); // penultimo elemento do array


// Adicionando elementos no array

paises.push("Paraguai");
paises.push("USA");
console.log(paises);

// Removendo elementos do array

paises.pop('USA');

console.log(paises);

// Adicionando elementos no inicio do array

paises.unshift("França");
console.log(paises);

// Removendo elementos do inicio do array

paises.shift('França');
console.log(paises);