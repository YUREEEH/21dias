let numero = parseInt(prompt("Digite um número inteiro"))

for (let i = numero; i <= numero +2; i++){
    console.log("tabuada do numero: " + i)
    for (let j = 0; j <=10 ; j++){
        console.log(i + " x " + j + " = " + (i*j))
    } 
}