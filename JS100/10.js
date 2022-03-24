const readline = require("readline");
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

std.on('line', (line) => {
  input = line.split(' ').map(el => Number(el));
  
for (let i = 0; i < input; i++) {
  let ans = "";

  for (let j = 0; j < input * 2 - 1; j++){
    if ( j < input - 1 - i || j > input - 1 + i ) {
      ans += " "
    } 
    else {
      ans += "*"
    }
  }
  console.log(ans);
}
  std.close();
}).on('close', () => process.exit())