// 탐욕법(Greedy) > 구명보트

function solution(people, limit) {
  people.sort((a, b) => a - b);
  let small = 0,
    big = people.length - 1,
    boat = 0;
  while (small <= big) {
    if (people[small] + people[big] <= limit) {
      small++;
      big--;
    } else {
      big--;
    }
    boat++;
  }
  return boat;
}
