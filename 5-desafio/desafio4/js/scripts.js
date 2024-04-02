let n1 = parseInt(prompt("Digite um número"))

let n2 = n1 * 10;
let n3 = 0;
let n4 = 1;

while(n3 < n2){
    n3 += n1;
    console.log(`${n1} x ${n4} é ${n3}`);
    n4++;
}