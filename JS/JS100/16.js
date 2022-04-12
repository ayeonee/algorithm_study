const readline = require('readline');
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

std.on('line', (line) => {
  input = line.split('').reverse().join('');
  console.log(input);
  std.close();
}).on('close', () => process.exit())