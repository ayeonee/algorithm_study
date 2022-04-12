// 벌집

var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let cnt = 1;
let sum = 1;

if (input === 1) console.log(1);
else {
  while (sum < input) {
    sum += 6 * cnt;
    cnt++;
  }

  console.log(cnt);
}
