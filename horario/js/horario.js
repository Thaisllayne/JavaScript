function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML = `Agora são  ${hora} horas`

    if (hora>=00 && hora<12){
        img.src= 'imagem/manha.jpg'
        document.body.style.background = '#f7c761'
    } else if (hora>=12 && hora<=18){
        img.src= 'imagem/tarde.jpg'
        document.body.style.background = '#e9a081'
    } else{
        img.src= 'imagem/noite.jpg'
        document.body.style.background = '#736289'
    }
}

