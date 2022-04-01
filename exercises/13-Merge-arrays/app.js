var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    let lengthtotal = chunk_one.length+chunk_two.length-1;

    for (let i= 0; i<=chunk_one.length;i++){
        newArray[i]=chunk_one[i];
       // console.log(i);
    }
    let k=0;
    for (let j= chunk_one.length; j<=lengthtotal;j++){
        newArray[j]=chunk_two[k];
        k++;
       // console.log(k);
    }

    //console.log(lengthtotal)
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));