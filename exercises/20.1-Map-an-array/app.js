var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(item,index, array){
	
	//add your code here and return the new value
	return 32+(item*(9/5));
	
});

console.log(arrayOfFahrenheitValues);