const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const readline = require('readline');

const readStream = fs.createReadStream('./data/inputs/input1.js');
const writeStream = fs.createWriteStream('./data/outputs/output1.js');

const rl = readline.createInterface({
  input: readStream,
  output: writeStream,
});

console.log('reading file');
rl.on('line', input => {
  console.log(input);
  writeStream.write(input + '\n');
});
rl.on('close', () => {
  console.log('closing file');
});
