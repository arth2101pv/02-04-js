let nome = "Rodolfo"
console.log(nome)

nome = "Rodolfo Gonçalves"
console.log(nome)

const  idade = 38
console.log(idade)

// idade = 39
// console.log(idade)

// console.log(`O nome do usuário é: ${nome} e essa pessoa tem ${idade} anos `)

// const name1 = prompt("Digite o seu nome")
// console.log("O nome digitado foi " + name1)
// console.log(`O nome digitado foi ${name1}`)
// alert(`O nome digitado foi ${name1}`)

console.log("teste")
console.error("Deu ruim ❌")
console.warn("Alerta 😳")

// const m = 5

// if(m >= 5){
//     console.log("M é maior que 5" + "\n Valor de M = " + m)
// }

// const user = prompt("Digite seu nome")

// if(user == 'Arthur') {
//     console.log(`Bem vindo, ${user}!`)
// }else {
//     console.log(`Uhm... novo por aqui, ${user}?`)
// }

// const nota = prompt("Digite sua média final")

// if(nota >= 7){
//     console.log("Aprovado! 😈")
// }else{
//     console.log("Reprovado! 😨")
// }

// const nota = prompt("Digite sua média final")

// if (nota >= 7){
//     console.log("Aprovado! 😈")
// } else if (nota > 5 && nota < 6){
//     console.log("Recuperação forte! 🥶")
// } else if (nota >= 6){
//     console.log("Trabalho geral")
// } else {
//     console.log("Reprovado! 😨")
// }

const diaSemana = parseInt(prompt("Dia da Semana"))

if(diaSemana == 1){
    alert("Segunda")
}
else if(diaSemana == 2){
    alert("Terça")
}
else if(diaSemana == 3){
    alert("Quarta")
}
else if(diaSemana == 4){
    alert("Quinta")
}
else if(diaSemana == 5){
    alert("Sexta")
}
else if(diaSemana == 6){
    alert("Sábado")
}
else if(diaSemana == 7){
    alert("Domingo")
}else{
    alert("Dia Inválido")
}

for(let i = 1; i<=10; i++){
    console.log (i)
}
