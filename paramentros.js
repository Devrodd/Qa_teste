

function gerarNome(nome, sobrenome, idade) {
    // const nome = "João";
    // const sobrenome = "Silva";
    // const idade = 30;

    console.log('Nome: ', nome + ' ' + sobrenome);
    console.log('Idade: ', idade);
}

gerarNome('luiz', 'da silva', 40); // Nome: luiz da silva, Idade: 40
gerarNome('maria', 'da silva', 30); // Nome: maria da silva, Idade: 30
gerarNome('joão', 'da silva', 20); // Nome: joão da silva, Idade: 20


/// Funcao que retornar algum dado

function gerarNome2(nome, sobrenome, idade) {
    return nome + ' ' + sobrenome + ' ' + idade;
}

