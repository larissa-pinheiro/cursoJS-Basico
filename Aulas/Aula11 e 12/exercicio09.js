console.log('O console funcionou corretamente')  
// >apertar F8 para abrir o console do Node Exec ou Ctrl Shift R para o runner

var vel = 60.5
console.log(`A velocidade do seu carro é ${vel}Km/h`)    //lembre de sempre usar crase quando usar ${}
console.log('Você ultrapassou a velocidade permitida. MULTADO!')
console.log('Dirija sempre usando cinto de segurança!')

// condição simples if

if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO!') 
    //esse comando só vai acontecer se a velocidade for acima de 60
}