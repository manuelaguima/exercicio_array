let res = document.getElementById('res')
function resolve(){
    let resultado = []
    let vetor = [1,2,3,4,5]
    let numero = Number(document.getElementById("numero").value)
    for(i=0; i<5; i++){
        resultado[i] = vetor[i] * numero
    }
    console.log('Resultado da multiplicação')
    console.table(resultado)
    res.innerHTML = resultado
}