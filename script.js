function insert(num) {
    let numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num


}

function clean() {
    document.getElementById('result').innerHTML = ""
}

function calcular() {
    let result = document.getElementById('result').innerHTML
    if (result) {
        document.getElementById('result').innerHTML = eval(result).toFixed(2)
    } else {
        document.getElementById('result').innerHTML = ""
    }
}