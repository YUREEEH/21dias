let mediaGeral = 0
let qtdHomens = 0 
let mulheresMaior7 = 0
let maiorHomens = 0

let numeroAluno = 1

while (numeroAluno <= 10){
    let nota = Number(prompt("Digite a nota do " + numeroAluno + "º aluno."))
    let sexo = prompt ("Digite o sexo do aluno. (f/m)")

    if (sexo == "m"){
        if(nota > maiorHomens){
            maiorHomens = nota
        }
        qtdHomens++
    }

    if (sexo =="f" && nota>7){
        mulheresMaior7++
    }
    mediaGeral+=nota
    numeroAluno++
    
} 

mediaGeral /= 10

console.log(" A média geral dos alunos foi: " + mediaGeral)
console.log("A quantiade de homens cadastrados foi " + qtdHomens)
console.log("O número de mulheres que tiraram mais que 7 foi: " + mulheresMaior7)
console.log("A maior nota entre dos homens foi: " + maiorHomens)