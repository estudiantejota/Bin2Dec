function bin2dec() {
    var bien = document.getElementById('bien')
    var mal = document.getElementById('mal')
    var total = document.getElementById('total').value
    var respuesta = document.getElementById('respuesta')

    respuesta.innerHTML = parseInt(total, 2);

    var num = total.charAt(total.length - 1)
    if (num == 0 || num == 1) {
        bien.innerHTML = 'Aquí está tu conversión'
        mal.innerHTML = ''
    } else if (num == '') {
        bien.innerHTML = ''
        mal.innerHTML = ''
        respuesta.innerHTML = 'Introduce un valor...'
    } else {
        respuesta.innerHTML = 'Introduce un número binario, por favor.'
        bien.innerHTML = ''
        mal.innerHTML = 'Has intruducio un numero no binario, introduce "1" o "0" para que funcione.'
    }
}