var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(person){
    let newArray = people.filter((element) => element !== person);
  // console.log(newArray);
   return newArray;
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
