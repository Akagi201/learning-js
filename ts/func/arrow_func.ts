
// Typescript example
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship'];
data.forEach( (line) => console.log(line) );

// => used as an expression
var evens = [2, 4, 6, 8];
var odds = evens.map(v => v + 1);
console.log(odds);

// as a statement
data.forEach( line => {
  console.log(line.toUpperCase())
});
