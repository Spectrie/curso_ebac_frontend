function verificar(){
    var numA = window.document.getElementById('n1')
    var numB = window.document.getElementById('n2')
    var nu1 = Number(numA.value)
    var nu2 = Number(numB.value)
    if(nu1 > nu2){
        alert("Invalido-O número B não é maior que o número A")
    }
    else{
        alert("Válido-O numero B é maior que o número A")
    }
}