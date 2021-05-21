function verificar() {
    let data = new Date();
    let ano = data.getFullYear()    //ano atual
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {  // se o cara não digitou o ano, ou o ano for maior que o ano atual, vai subir um alerta
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sex')       /* se eu colocar [0] no final, 
        seleciona a bolinha do masc e se colocar [1], seleciona a do feminino*/
        let idade = ano - Number(fano.value)   //para calcular a idade
        //res.innerHTML = `Idade: ${idade} anos.` mostra se calculei a idade corretamente
        let genero = ''
        let img = document.createElement('img')  //criei o elemento img
        img.setAttribute('id', 'foto')   // atribuí a id 'foto' para minha img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'nome_da_foto.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'nome_da_foto.png')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'nome_da_foto.png')
            } else {
                // idoso
                img.setAttribute('src', 'nome_da_foto.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'nome_da_foto.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'nome_da_foto.png')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'nome_da_foto.png')
            } else {
                // idoso
                img.setAttribute('src', 'nome_da_foto.png')
            }
        }
        res.style.textAlign = 'center'  //deixa somente o texto de resposta no centro
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`  // para checar se o código está funcionando
        res.appendChild(img)   // adiciono o elemento img que irá aparecer de acordo com o selecionado
    }
}