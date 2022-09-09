var person = [];
person.name = "Mrs. White";
var who = person.name;

// console.log(who);

// console.log(typeof person === "object"); // true
// console.log(typeof person === "array"); // false

// Brackets

var plea = "wouldShe";

person.name = "Mrs. White";

person[plea] = "I would never!";
// console.log(person.wouldShe);
person["plea"] = "I would never!";
console.log(person.plea);

person[0] = "nhsnka";
person[1] = 100;

console.log(person); // shows all values
console.log(person.length); // results in 2 while actual length seems to be 5
