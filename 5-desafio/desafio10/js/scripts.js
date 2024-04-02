let n1 = parseInt(prompt("Digite um número"))

var npar = 0

while (npar < n1){
    npar++;
    console.log(`${npar} é ímpar`)
    npar++;
}if (n1 & 1){
    console.log(`O número escolhido (${n1}) é ímpar`)
}else {
    console.log(`O número escolhido (${n1}) é par`)
}