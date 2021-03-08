function calcular(){
    var escala = Number(document.getElementById('escala').value)
    var temperatura = Number(document.getElementById('temperatura').value)
    var res = document.getElementById('res')
  
    
    if(temperatura==0 || escala.length==0) {
        window.alert('Por favor, preencha todos os campos!')
    }  else{
        if (escala == 1){
            // Fahrenheit
            res.innerHTML = `Transformando ${temperatura} °F.. <br>`
            C = (temperatura - 32) * 5/9 
            res.innerHTML+= `O valor em Celsius é: ${C.toFixed(2)} `
        } else{
            // Celsius
            res.innerHTML = `Transformando ${temperatura} °C..<br>`
            F = (temperatura * (9/5)) + 32
            res.innerHTML += `O valor em Fahrenheit é: ${F.toFixed(2)}`
        }
    }
 


} 

       
