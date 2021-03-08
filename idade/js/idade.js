function verificar(){
    var data = new Date()
    var ano = data.getFullYear() /* pega 4 dígitos */
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') /* criando uma tag img com um id='foto' direto do JS */
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                /* criança */
                img.setAttribute('src', 'imagem/criança-homem.jpg')
            } else if (idade < 21){
                /* adolescente */
                img.setAttribute('src', 'imagem/adolescente-homem.jpg')
            } else if (idade < 50){
                /* adulto */
                img.setAttribute('src', 'imagem/adulto.jpg')
            } else {
                /* idoso */
                img.setAttribute('src', 'imagem/idoso.jpg')
            }      
        } else{
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                /* criança */
                img.setAttribute('src', 'imagem/criança-mulher.jpg')
            } else if (idade < 21){
                /* adolescente */
                img.setAttribute('src', 'imagem/adolescente-mulher.jpg')
            } else if (idade < 50){
                /* adulto */
                img.setAttribute('src', 'imagem/adulta.jpg')
            } else {
                /* idoso */
                img.setAttribute('src', 'imagem/idosa.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) /* adicionando elemento */
    }
}