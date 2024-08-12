let res = document.getElementById('res')
let vetor1 = []
let vetor2 = []
let resultado = []

function gravar(){
    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)
    let valor3 = Number(document.getElementById('valor3').value)
    let valor4 = Number(document.getElementById('valor4').value)
    let valor5 = Number(document.getElementById('valor5').value)
    let valor6 = Number(document.getElementById('valor6').value)
    let valor7 = Number(document.getElementById('valor7').value)
    let valor8 = Number(document.getElementById('valor8').value)
    let valor9 = Number(document.getElementById('valor9').value)
    let valor10 = Number(document.getElementById('valor10').value)
    
    vetor1[0] = valor1
    vetor1[1] = valor2
    vetor1[2] = valor3
    vetor1[3] = valor4
    vetor1[4] = valor5
    vetor2[0] = valor6
    vetor2[1] = valor7
    vetor2[2] = valor8
    vetor2[3] = valor9
    vetor2[4] = valor10
    console.log('vetor 1')
    console.table(vetor1)
    console.log('vetor 2')
    console.table(vetor2)

}

function somar(){
    for(i=0;i<5;i++){
        resultado[i]=vetor1[i]+vetor2[i]
    }
    console.log(resultado)
    console.table(resultado)
    res.innerHTML = "<br>" + "[" + resultado + "]"
}
