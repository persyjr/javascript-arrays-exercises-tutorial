let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (let i in par){
    const letter =par[i].toLowerCase();
    //console.log(letter);
    if (letter ==" ") continue;
    else if (counts[letter]==undefined){
   // console.log("found "+letter+"for the first time")
    counts[letter]=1;
    }else{
     //   console.log("found "+letter+"more the onece")
        counts[letter]=counts[letter]+1;
    }
}

console.log(counts);