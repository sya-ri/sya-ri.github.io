/* eslint-disable @typescript-eslint/no-var-requires */
const readline = require('readline');

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

console.log(
  '*** ncu Changelog Formatter ***\n' +
    '> Example: \n' +
    '>  @types/node                       ^15.6.1  →  ^15.12.2\n' +
    '>  @types/react                      ^17.0.8  →  ^17.0.11\n' +
    '\n' +
    '>> Paste Changelog and Press the Enter <<\n'
);

lineReader.setPrompt('');
lineReader.prompt(false);

lineReader.on('line', (line) => {
  if (line.length !== 0) {
    lines.push(line);
  } else {
    lineReader.close();
  }
});

lineReader.on('close', () => {
  console.log('\n--------------[ Result ]--------------');
  lines.forEach((line) => {
    console.log(line.replace(/^\s+/, '').replace(/\s{2,}/g, ' '));
  });
  console.log('--------------------------------------');
});
