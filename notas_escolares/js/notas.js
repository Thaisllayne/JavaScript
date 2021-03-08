function calcular() {
    var nota = document.getElementById('nota');
    var res = document.getElementById('res');


    if (nota.value.length == 0 || nota.value > 100 || nota.value < 0) {
        window.alert('Informe um valor entre 0 e 100!')
    }   

    if (nota.value >= 90) {
        res.innerHTML = "Sua nota é A"
    } else if (nota.value >= 80 && nota.value <= 89) {
        res.innerHTML = "Sua nota é B"
    } else if (nota.value >= 70 && nota.value <= 79) {
        res.innerHTML = "Sua nota é C"
    } else if (nota.value >= 60 && nota.value <= 69) {
        res.innerHTML = "Sua nota é D"
    } else {
        res.innerHTML = "Sua nota é F"
    } 
}