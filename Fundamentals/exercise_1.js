var game = {};
// with dot notation
game.murderer = "??";

// with brackets
game["weapons"] = ["lasers", "angry cats", "dish soap"]; // since its a collection of same things so we made an array of it

// make an array of object of similar thing

game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "room" },
  { type: "dish soap", location: "kitchen" },
];

//
game.name = [];
game.name[0] = "Miss Scarlet";
// OR
// game.push("Mr. Green"); // at back of the array (but its wrong as game is an object)
console.log(game);
