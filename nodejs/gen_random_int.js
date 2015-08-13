// Returns a random integer between min and max



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("rand int " + getRandomInt(10000, 99999));