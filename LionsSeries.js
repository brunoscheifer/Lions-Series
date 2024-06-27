const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let series = []

exibirMenu()
function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar Série
    2. Editar Serie
    3. Listar Séries
    4. Remover Série
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
            listarSerie()
            exibirMenu()
            break
        case '4':
            removerSerie()
            break
        case '5':
            marcarConcluido()
            break
        case '6':
            rl.close()
            break
        default:
            console.log('Numero invalido, tente denovo!')
            exibirMenu()
            break
        }
    })
}

function adicionarSerie() {
    rl.question('Qual o nome da série?: ', (nome) => {
        rl.question('Qual o ano de lançamento da série: ', (ano) => {
            rl.question('Qual o genero da série: ', (genero) => {
                rl.question('Qual a classificação indicativa da série: ', (idade) => {
                    rl.question('Qual o diretor(a) da série: ', (diretor) => {

                        series.push({nome: nome, ano: parseInt(ano), genero: genero, idade: idade, diretor: diretor, concluido: false})
                        console.log('Série adicionada com sucesso!')
                        exibirMenu()
                    })
                })
            })
        })
    })
}

function editarSerie() {
    if (series.length == 0){
		console.log("Não há séries adicionadas")
        exibirMenu()
	} else {
        listarSerie()
            rl.question('Digite a série que voçê quer editar: ', (numero) => {
                if(numero > 0 && numero <= series.length) {
                    rl.question('Digite o novo nome: ', (nome) => {
                        rl.question('Digite o novo ano: ', (ano) => {
                            rl.question('Digite o novo genero: ', (genero) => {
                                rl.question('Digite a nova classificação: ', (idade) => {
                                    rl.question('Digite o novo diretor: ', (diretor) => {
                                        series[numero - 1] = {
                                            nome,
                                            ano,
                                            genero,
                                            idade,
                                            diretor,
                                        }
                                        console.log('Editado com sucesso')
                                        exibirMenu()
                                    })
                                })
                            }) 
                        })
                    })
                } else {
                    console.log('\nNúmero inválido, tente novamente.')
					exibirMenu()
                }
            })
        }
    }



function listarSerie() {
	if (series.length === 0) {
		console.log('Nenhuma série adicionado ainda!')
	} else {
		console.log('Lista de séries:')
		series.forEach((series, index) => {
            console.log(`
            ${index + 1}. Nome: ${series.nome}
            Ano: ${series.ano}
            Genero: ${series.genero}
            Classificação: ${series.idade}
            Diretor: ${series.diretor}
            Status: ${series.concluido}
            `)
        })
    }
}

function removerSerie() {
    if (series.length == 0) {
        console.log('Nenhuma série adicionada ainda!')
        exibirMenu()
    } else {
        listarSerie()
		rl.question('Qual série deseja remover: ', (numero) => {
			if (numero > 0 && numero <= series.length) {
				series.splice(numero - 1, 1)
				console.log('Série removida!')
				exibirMenu()
			} else {
				console.log('Numero invalido, tente denovo')
				exibirMenu()
			}
		})
	}
}

function marcarConcluido() {
	if (series.length === 0) {
		console.log('Nenhuma série adicionada ainda!')
		exibirMenu()
	} else {
		listarSerie()
		rl.question('Qual série voçê quer marcar como concluida?: ', (numero) => {
			if (numero > 0 && numero <= series.length) {
				series[numero-1].concluido = true
			}
			console.log("Marcado com sucesso")
			exibirMenu()
		}
	)}
}
