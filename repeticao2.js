

const nome = ["Eduardo", "Maria", "Joana", "Fulano", "Ciclano", "Beltrano"];

nome.push("Fulana");
nome.push("Ciclana");
nome.push("Beltrana");
nome.push("Eduarda");
nome.push("Mariana");
nome.push("Joanna");
nome.push("Fulana");

console.log(nome);

nome.forEach((nome, index) => {
    console.log('Execucao numero: ', index + 1)
    console.log('Nome: ', nome)
    console.log('----------------')
});

const pessoas = [
    {
        nome: "Eduardo",
        idade: 25,
        cidade: "São Paulo"
    },
    {
        nome: "Maria",
        idade: 30,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Joana",
        idade: 35,
        cidade: "Curitiba"
    },
    {
        nome: "Fulano",
        idade: 40,
        cidade: "Belo Horizonte"
    },
    {
        nome: "Ciclano",
        idade: 45,
        cidade: "Salvador"
    },
    {
        nome: "Beltrano",
        idade: 50,
        cidade: "Recife"
    }
]

pessoas.forEach(pessoas => {
    console.log('Nome: ${pessoas.nome}, Idade: ${pessoas.idade}, Cidade: ${pessoas.cidade}')
})