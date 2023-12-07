let fome = prompt("Você está com fome? (sim/não)")
let dinheiro = prompt("Você tem dinheiro? (sim/não)")
let restaurante = prompt ("O restaurante está aberto? (sim/nâo)")

if(fome === "não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa :c")
}else if (fome === "sim" && dinheiro === "sim" && restaurante === "não"){
    console.log("Melhor pedir um delivery")
}else{
    console.log("Bora pro chinês!!! :D")
}