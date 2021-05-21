
//exemplo de Condição Aninhada:

var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18) {
        console.log('Voto opcional')
    }
}

/* se eu quiser economizar a escrita e diminuir um bloco, posso utilizar o else if
Então a condição ficaria assim: */

var idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
        console.log('Voto opcional')
}

// ainda se eu quiser adicionar uma terceira opção, basta escrever:

var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

// eu posso colocar outra condição, que seria a idade > 65 ser opcional:

var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Logo, você não vota.')
} else if (idade < 18 || idade > 65) {    // lembrando que || significa OU
        console.log('Então o voto é opcional.')
} else {
    console.log('Então o voto é obrigatório.')
}

// Outros exemplos:

var hora = 8
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

// também é possível pegar a hora do sistema:

var agora = new Date ()   // será sempre Date, mesmo que seja hora
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

// lembrando que é só apertar F8 para checar no console