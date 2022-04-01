var arr = [45,67,87,23,5,32,60];

//YouinverArrayr code here.
//console.log(arr.length)
let a= arr.length;
const inverArray = [a];
let j=0;
for (let i= a ; i>0; i=i-1){
    inverArray [j] = arr[i-1];
    j++;
  } 
 console.log(inverArray)