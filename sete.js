let res = document.getElementById('res')
let vetor = []
let resultado = []

function gravar(){
    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)
    let valor3 = Number(document.getElementById('valor3').value)
    let valor4 = Number(document.getElementById('valor4').value)
    let valor5 = Number(document.getElementById('valor5').value)
    let valor6 = Number(document.getElementById('valor6').value)
    let valor7 = Number(document.getElementById('valor7').value)
   
    
    vetor[0] = valor1
    vetor[1] = valor2
    vetor[2] = valor3
    vetor[3] = valor4
    vetor[4] = valor5
    vetor[5] = valor6
    vetor[6] = valor7
  
    console.log('vetor')
    console.table(vetor)
   

}

function somar(){
    for(i=0;i<7;i++){
        resultado[0]= vetor[0]+ vetor[1]+ vetor[2] + vetor[3]+ vetor[4]+ vetor[5]+ vetor[6]
        console.log(resultado[0])
    res.innerHTML = "<br>" + "[" + resultado + "]"
        
    }
  
}
