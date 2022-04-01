let mySampleArray = ['Esmeralda', 'Kiko', 'Ruth', 'Lebron', 'Pedro', 'Maria', 'Lou', 'Fernando', 'Cesco', 'Bart', 'Annie'];

//your code here
var a = mySampleArray.length;

var myNewArray=[];
var b=0;

for (var i=a-1;i>-1; i--){  
    myNewArray.push(mySampleArray[i]);

    console.log(myNewArray[b]);
    b=b+1;
 

}

