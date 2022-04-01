

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
var newArray =  function myFunction (item,index,array){
    return item*3;
};

console.log(myNumbers.map(newArray));
