let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here


function filterByName(array,string) {
    const result =array.filter( function (item,index,array){
        return  array[index].includes(string.toLowerCase())
    })
     
    return result;
}

console.log(filterByName(names, 'am'));



/*

let resultingNames =[];

function filterByName (array,string){
    //console.log(string);
for (i=0;i<array.length;i++){
    if (array[i].includes(string)){
    //console.log(array[i])
    resultingNames.push(array[i])
    }
    else {
    
    }

}
    return (resultingNames)
};


console.log(filterByName(names, 'am'));*/