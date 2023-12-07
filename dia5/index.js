let num1 = Number( prompt("digite seu primeiro número"))
let equacao = prompt ("qual sera a equação? escolha entre soma (+), subtração (-), multiplicação (*) ou divisão (/)")
let num2 = Number(prompt("digite seu segundo número"))

//estava dando erro, motivo: na parte em que a noma era feita em si, não havia () para delimitar a area do calculo
switch(equacao){
    case "+":
        console.log(num1 + "+" + num2 + "=" + (num1+num2))
    break
    
    case "-":
        console.log(num1 + "-" + num2 + "=" + (num1-num2))
    break

    case "*":
        console.log(num1 + "*" + num2 + "=" + (num1*num2))
    break

    case "/":
        console.log(num1 + "/" + num2 + "=" + (num1/num2))
    break

    default:
        console.log("entradas inválidas, por favor reinicie")
}