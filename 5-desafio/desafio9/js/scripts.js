let n1 = parseInt(prompt("Digite um número"))
var op = prompt("Digite qual é a operação que deseja realizar (+, -, *, /)")
let n2 = parseInt(prompt("Digite o outro número"))

switch(op){
    case '+':
    console.log(`${n1} ${op} ${n2} = ${n1 + n2}`)
    break;
        case '-':
        console.log(`${n1} ${op} ${n2} = ${n1 - n2}`)
        break;
            case '/':
            console.log(`${n1} ${op} ${n2} = ${n1 / n2}`)
            break;
                case '*':
                console.log(`${n1} ${op} ${n2} = ${n1 * n2}`)
                break;
                    default:
                    console.log("Digite uma operação válida")
}