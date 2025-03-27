

const cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Curitiba']

cidades.forEach((cidade, index) => {
    console.log('Execucao numero: ', index + 1)
    console.log(cidade)

    if (cidade == 'Rio de Janeiro') {
        console.log('Cidade Encontrada')

    } else {

        console.log('nao encontrada')
    }

})