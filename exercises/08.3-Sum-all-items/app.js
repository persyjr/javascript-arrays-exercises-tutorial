let theArray=[2,13,34,5];
function sumTheElements(theArray){
	
	var total = 0;
	//your code here
	for (let i=0 ; i<theArray.length; i++ ){
		total = total+theArray[i];

	}

	return total;

}

sumTheElements(theArray)