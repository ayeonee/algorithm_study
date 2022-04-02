function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[new Date(`2016-${a}-${b}`).getDay()];
}

function solution2(a, b) {
  return new Date(`2016-${a}-${b}`).toString().substr(0, 3).toUpperCase();
}
