const btn = document.querySelector('.btn');
let coeficiente = 0
let lastcima = 0
let lastbaixo = 0

function calcular(nota, hora, lastcima, lastbaixo) {
    let newcima = lastcima + (nota * hora) 
    let newbaixo = lastbaixo + (hora)
    lastcima = newcima
    lastbaixo = newbaixo
    const conj = [lastcima,lastbaixo]
    console.log(conj)
    return conj
}

function cof(lastcima, lastbaixo) {
    let coeficiente = lastcima/lastbaixo
    return coeficiente
}

btn.addEventListener('click', function(evento) {
    evento.preventDefault ();

    const nota = document.querySelector('.nota');
    const horas = document.querySelector('.horas');
    
    const notav = nota.value;
    const horasv = horas.value;
    
    const notac = parseFloat(notav);
    const horasc = parseFloat(horasv);
   
    if (notac < 0 || isNaN(notac)) {
        document.querySelector('#resultado').classList.remove('sucesso')
        document.querySelector('#resultado').classList.add('erro')
        resultado.innerHTML += `Nota inválida <br>`
        const parar = console.log('Parei')
        return parar
    } else {
        resultado.innerHTML = ''
    }

    if (horasc < 0 || isNaN(horasc)) {
        document.querySelector('#resultado').classList.remove('sucesso')
        document.querySelector('#resultado').classList.add('erro')
        resultado.innerHTML += `Quantidade de horas inválida <br>`
        const parar = console.log('Parei')
        return parar
    } else {
        resultado.innerHTML = ''
    }

    let calculo = calcular(notac, horasc, lastcima, lastbaixo)
    lastcima = calculo[0] 
    lastbaixo = calculo[1]
    coeficiente = cof(calculo[0],calculo[1])

    coeficientes.innerHTML = `Seu coeficiente atual é: ${coeficiente}`
});
