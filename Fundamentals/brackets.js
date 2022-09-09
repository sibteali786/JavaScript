var person = [];

person.name = "Mrs. White";

var who = person.name;

console.log(person[0]); // returns undefined
person[0] = "I was not in the Billiards room";
console.log(person[0]); // returns value
