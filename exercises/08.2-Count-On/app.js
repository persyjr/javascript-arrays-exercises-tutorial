let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
let j=0;

for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    if (typeof myArray[index]=='object'){
    hello [j]=myArray[index];
    j++;
    }else{
        continue
    }
}

console.log(hello)