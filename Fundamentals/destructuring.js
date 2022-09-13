var obj = { first: "Dan", last: "Coelho" };
var first = obj.first;
var last = obj.last;

const j = { x: 1 };
/* j = 1; // TypeError: Assignment to constant variable. */
j.x = 3; // OK

Object.freeze(j);
// j.x = 4; // TypeError: Cannot assign to read only property 'x' of object '#<Object>'

// Exercise 1
const game = { name: "Rusty", room: "kitchen", weapon: "candlestick" };
const { name, room, weapon } = game;

// OR
const { name: n, room: r, weapon: w } = game;

//  OR
const {
  name: N,
  room: R,
  weapon: W,
} = { name: "Rusty", room: "kitchen", weapon: "candlestick" };
