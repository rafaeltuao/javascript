function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        foto.innerHTML = '<img src="fotomanha.jpg">'
        document.body.style.background = '#FA4645'
    } else if (hora >= 12 && hora <= 18) {
        foto.innerHTML ='<img src="fototarde.jpg">'
        document.body.style.background = '#822F21'
    } else {
        foto.innerHTML = '<img src="fotonoite.jpg">'
        document.body.style.background = '#121B2C'

    }
}