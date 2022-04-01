var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
let le = myArray.length;

function maximo (Array){
    let max=0;
    for (let i=0 ; i<le ; i++){
        
            var comp = Array[i];
                if (max >= comp){
                max=max;
                    }
                else if (Array[i] > max){
                    max=Array[i];
                }
                }
                console.log(max);  
                return max;
        }
       


maximo(myArray);