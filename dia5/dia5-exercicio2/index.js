let decisao = prompt("Bem vindo ao nosso posto! Como podemos te ajudar? Escolha entre: gasolina, alcool ou calibrar pneus")
let valor = 0
switch (decisao){

    case "gasolina":
        valor = Number(prompt("Qual valor deseja abastecer?"))
        console.log("Você abasteceu " + (valor/5) + " litros, volte sempre!")
    break

    case "alcool":
        valor = Number(prompt("Qual valor deseja abastecer?"))
        console.log("Você abasteceu " + (valor/3) + " litros, volte sempre!")
    break

    case "calibrar pneus":
        console.log("Pneus calibrados com sucesso!")
    break

    default:
        console.log("Desculpe senhor, não entendi, por favor aperte F5")
}

   