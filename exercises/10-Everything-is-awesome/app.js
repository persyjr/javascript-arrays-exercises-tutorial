let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
            // magic goes inside these brackets
            if(myArray[index]==1 ){
                return_array[index]=myArray[index];
            }else if(myArray[index]==0){
                return_array[index]='Yahoo';
            }
           
    });
    //console.log(return_array);
    return return_array;
};

console.log(ZerosToYahoos(myArray));