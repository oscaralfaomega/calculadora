function agregar(numero) {
    console.log('Soy la funcion agregar')
    document.querySelector('.display').innerText += numero
}

function limpiar() {
    document.querySelector('.display').innerText = ''
}

function igual() {
    document.querySelector('.display').innerText = eval(document.querySelector('.display').innerText)
}
