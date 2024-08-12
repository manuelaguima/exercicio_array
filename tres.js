let resposta = document.getElementById('resposta')

function somar(){

    let vetor = [1, 2, 3, 4, 5]
    let resultado = []

    for(i=0; i<5; i++){

        resultado[i] = vetor[i] + 7
       


    }
    console.log('resultado da soma do array: ')
    console.table(resultado)
    resposta.innerHTML = 'Resposta = ' + resultado
    
}

