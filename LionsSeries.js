const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let series = []

exibitMenu()
function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar Série
    2. Editar Serie
    3. Listar Séries
    4. remover Série
    5. Marcar como Concluido
    6. Sair
    `)

rl.question('Escolha uma opção: ', (opcao) => {
    switch(opcao) {
        case '1':
            adicionarSerie()
            break
        case '2':
            editarSerie()
            break
        case '3':
            listarserie()
            break
        case '4':
            removerSerie()
            break
        case '5':
            marcarConcluido()
            break
        case '6':
            rl.close
        default:
            console.log('Numero invalido, tente denovo!')
            exibirMenu()
            break
    }
})
}