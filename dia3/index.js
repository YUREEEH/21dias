let nome = prompt("digite seu nome");
let idade = parseInt(prompt("olá " + nome + ", qual sua idade"));
let altura = parseFloat(prompt("digite sua altura"));
let peso = prompt("e por ultimo digite seu peso");

let anoNascimento = 2023 - idade;
let imc = peso / (altura * altura);

console.log("Olá " + nome + " você tem " + idade + " anos, nasceu em " + anoNascimento + " tem " + altura + " de altura, e pesa " + peso + "kg, seu IMC é de " + imc + "Kg/m²")
