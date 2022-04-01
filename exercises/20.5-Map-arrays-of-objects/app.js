let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	
	var año= person.birthDate.getYear();
	var mes= (person.birthDate.getMonth())/12;
	var dia= (person.birthDate.getMonth())/365;
	
	var hoy =new Date(2017,8,30);

	var year1=hoy.getYear()-año;
	var month1=mes-(hoy.getMonth()/12);
	//var dia1=(hoy.getDate()/365)-dia;
	var year2;
	
	/*console.log(hoy.getMonth()/12)	
	console.log(mes)
	console.log(year1)*/

	console.log(month1);
	if (month1<=0){
		
		year2=year1;
		
	}else{
		
		year2=year1+mes+month1+dia;
	}

	return 'Hello, my name is '+person.name+' and I am '+Math.floor(year2);
	
};


console.log(people.map(simplifier));


