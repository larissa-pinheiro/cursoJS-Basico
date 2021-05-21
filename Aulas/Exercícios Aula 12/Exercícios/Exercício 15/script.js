
// para utilizar um banco de imagens, posso entrar no site pexels português (só pesquisar no Google)


function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var resp = window.document.querySelector('div#resp')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        resp.innerHTML = `<strong>Bom dia!</strong>`
        img.src = 'fotomanha.png'   //muda para a foto escolhida
        document.body.style.background = '#9AD4FA'
    } else if (hora >= 12 && hora < 18) {
        resp.innerHTML = `<strong>Boa tarde!</strong>`
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#FB8B02' 
    } else {    //hora > 18 && hora < 0, já está implícito por conta dos códigos anteriores
        resp.innerHTML = `<strong>Boa noite!</strong>`
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#002F37'    
    }
}



