var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let l=mix.length;
let newArray =[l];
for (let i =0; i<l ;i++){
    let a =typeof mix[i];
    newArray[i]=a;
   // console.log(newArray[i])
}
console.log(newArray)