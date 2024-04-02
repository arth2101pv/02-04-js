let n1 = parseInt(prompt("Digite um número"))
let n2 = parseInt(prompt("Digite outro número"))

if (n1 > n2){
    console.log(`${n1} É o maior número.`)
}else if (n1 == n2){
    console.log(`${n1} e ${n2} são iguais.`)
}else {
    console.log(`${n2} É o maior número.`)
}