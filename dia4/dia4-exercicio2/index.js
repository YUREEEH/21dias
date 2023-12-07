const nome = prompt("Olá, qual seu nome?")
const idade = Number(prompt("Olá " + nome + ", qual sua idade?"))
const possuiCarta = prompt ("Você possui carteira de motorista? (sim/não)")
const possuiCarro = prompt ("E você tem carro?")
const email = prompt("Digite seu email")

if (idade < 18 || possuiCarta === "não"){
    console.log(nome + ", você não pode dirigir.")
}else if(idade >= 18  && possuiCarta === "sim" && possuiCarro === "não"){
    console.log("Você precisa alugar um carro e cadastrar ele em nosso app")
}else{
    console.log("Parabéns " + nome + ", você cumpriu todos os requisitos, dentro de instantes você recebera em seu email as instruções para cadastrar seu carro em nosso sistema")
}
