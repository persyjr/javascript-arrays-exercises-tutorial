let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here


function mergeTwoList (Array) {
    let even =[];
    let odds =[];
    let sum =[];
    let a= Array.length;
  

    for (let i =0 ; i<a;i++){
        if(Array[i]%2==0){
            odds.push(Array[i]);

            }else if (Array[i]%2!=0){
            even.push(Array[i]);
            }
            
        }
        sum = even.concat(odds);
        //funcion concatenar ahorra for de concatenar
       // console.log((sum));
return sum;
}

console.log(mergeTwoList(list_of_numbers))
