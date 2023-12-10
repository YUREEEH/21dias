let saldo = 10000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false


do{
    const nome = prompt("Digite seu nome")
    const cpf = prompt("Digite seu CPF")
    const operacao = prompt ("Qual operação deseja fazer? (saque/deposito)")
    const valor = Number(prompt("Digite o valor da sua transação"))

    if ( operacao==="saque"){
        if(valor<0){
            console.log("Valor inválido. Programa encerrado")
        }else if(operacao==="saque" && valor>saldo){
            console.log("Você não tem saldo suficiente")
        }else if(operacao==="saque"){
            console.log("Olá, " + nome + " " + cpf + " seu saldo atual é: "+ saldo)
            saldo -= valor
            totalTransacoes++
            somaValoresInseridos+=valor
            if(valor>maiorValorInserido){
                maiorValorInserido=valor
            }
            console.log("Transação realizada, seu saldo agora é: "+saldo)
        }
    }else if (operacao==="deposito"){
        console.log("Olá, " + nome + " " + cpf + " seu saldo atual é: "+ saldo)
        saldo+=valor
        totalTransacoes++
        somaValoresInseridos+=valor
        if(valor>maiorValorInserido){
            maiorValorInserido=valor
        }
        console.log("Transação realizada, seu saldo agora é: " + saldo)
    }
    const opcao = prompt("Deseja continuar? (sim/nao)")
    if(opcao==="sim"){
        continuar=true
    }else if(opcao==="nao"){
        continuar=false
    }else{
        console.log("Opção inválida, aplicação encerrada por segurança")
    }
}while(continuar)

console.log("Saldo final: "+saldo)
console.log("Maior valor inserido: "+maiorValorInserido)
console.log("Média dos valores inseridos: "+(somaValoresInseridos/totalTransacoes))