
// exemplos do que posso mudar com repetições:

/*
console.log('Tudo bem?')    // dar F8 pra abrir o console do Node.js
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

WHILE:

let contador = 1      // eu crio uma variável para iniciar a contagem do loop
while (contador <= 6) {
    console.log('Tudo bem?')
    contador++
}

// eu posso jogar as variáveis dentro da resposta também:
let contador = 1      
while (contador <= 6) {
    console.log(`Número ${contador}`)
    contador++
}

// se eu quiser que execute o bloco primeiro e depois faça o teste:

let contador = 1 
do {
    console.log('Tudo bem?')
    contador++
} while (contador <= 6)


FOR
   
for (contador = 1; contador <= 6; contador++) {
    console.log(`Número ${contador}`)    // posso deixar só a variável dentro tb (contador)
}
