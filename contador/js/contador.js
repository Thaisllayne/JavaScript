function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<small>Impossível contar! Falta dados</small>'
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i<f){
            // Contagem crescente
             for(let c = 1; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            // Contagem regressiva
            for (let c = i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML+= '\u{1F3C1}' /* emoji */
       
    }

}
