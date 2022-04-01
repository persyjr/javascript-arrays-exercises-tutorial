// Code goes here
let random 

function matrixBuilder (longitud){
    let fila =[];
   
    for (i=0; i<longitud;i++){
        let columna=[]
        for (j=0; j<longitud;j++){
            //console.log(fila[i][j])
            random=((Math.random()*2))
            random=Math.floor(random);
            columna.push(random)
        }
        fila.push(columna)
    }
    
    return fila;
    
}

// do not change anything from this line down
console.log(matrixBuilder(5))