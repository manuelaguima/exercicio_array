let resposta = document.getElementById('resposta')

function calcular(){

    let num = Number(document.getElementById('num').value)

    let vetor = [1, 2, 3, 4, 5]
    let resultado = []

    for(i=0; i < 5; i++){

        resultado[i] = vetor[i] * num
        
    }
    console.table(resultado)
    console.log('O resultado é = ')
    resposta.innerHTML = resultado
}
