function solution(s) {
  const str = s.toLowerCase();
  let p = 0,
    y = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") p++;
    else if (str[i] === "y") y++;
  }

  return p === y;
}

function solution2(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
