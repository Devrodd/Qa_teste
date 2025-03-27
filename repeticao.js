

// Estrutura de repetição

const cidade = ["SP", "CE", "DF", "RJ"]

cidade.forEach((element, index) => {
    console.log('Execucao numero: ' + index)
    console.log(element)
});
// For 


// Exemplo de loop infinito

/* for (let indice = 0; indice < 10;) {
    console.log(indice);
}
*/
// Exemplo 3  

for (let indice = 0; indice < 11; indice++) {
    console.log(indice);
}

// condicao array/for

const paises = ["Brasil", "Argentina", "Chile", "Uruguai"];

for (let indice = 0; indice < 1; indice++) {
    console.log(paises[3], paises[2]);
}

// While

let contador = 0;

while (contador < 10) {
    console.log(contador);
    contador++;
}