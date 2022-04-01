// Add your code here

function lyricsGenerator (array){
    const result=[];
    let cont =0;
    for (i=0; i<array.length;i++) {

    switch (array[i]){
        case 0:
        result.push('Boom');
        break;
        case 1:
        result.push('Drop the base');
        cont=cont+1;
        if (cont==3){
            result.push('¡¡¡Break the base!!!');
        }else{

        }
        //console.log(cont)
        break;
        default :
        0;
    }
    

    }
    return result;
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))