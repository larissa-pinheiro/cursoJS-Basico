function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considere a partir de passo 1')
            p = 1
        }
        if (i < f) {   // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F984}`   // o código vem U+1F984, aí muda pra \u{numero aqui}
            }

        } else {    // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `$ {c} \u{1F984}`
            }
        }  
    }
}


