let res = document.getElementById('res')
let vetor = []
let resultado = []

function gravar(){
    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)
    let valor3 = Number(document.getElementById('valor3').value)
    let valor4 = Number(document.getElementById('valor4').value)
    let valor5 = Number(document.getElementById('valor5').value)

   
    
    vetor[0] = valor1
    vetor[1] = valor2
    vetor[2] = valor3   
    vetor[3] = valor4
    vetor[4] = valor5
  
    console.log('vetor')
    console.table(vetor)
   

}

function invert(){
    for(i=0;i<7;i++){
      
          resultado[i] = vetor[vetor.length - 1 - i];
            
            
            console.log('vetor invertido');
            console.table(resultado);
            res.innerHTML = `Vetor invertido: ${resultado.join(', ')}`;
        
        
    }
}