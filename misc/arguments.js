function testArg() {
  console.log('arguments: ', arguments);
  console.log('arguments count: ', arguments.length);
  console.log('first arguments: ', arguments[0]);
}

testArg(1, 2, 3, 4);
