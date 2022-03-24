const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

const readline = require("readline");
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

std.on('line', (line) => {
  input = line.split(' ').map(el => Number(el));

  console.log(planets[input - 1]);
  std.close();
}).on('close', () => process.exit())