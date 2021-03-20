// Only change code below this line
var myPetsArray = [
  {
    animalType: [
    "Dog",
    "Cat",
    "Bird"
    ]
  },
  {
    name: [
      "Pujdo",
      "Maca",
      "Tweety"
    ]
  },
 ];

function myPetsFunction(pets) {
  var pet = myPetsArray[1].name[1];
  return pet;
 } 
// Only change code above this line

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.mypets = myPetsArray;