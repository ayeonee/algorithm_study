function solution(s, n) {
  return s
    .split("")
    .map((v) => {
      if (v !== " ") {
        const num = v.charCodeAt(0);
        if ((num >= 97 && num + n > 122) || (num <= 90 && num + n > 90))
          return String.fromCharCode(num + n - 26);
        else return String.fromCharCode(num + n);
      } else return v;
    })
    .join("");
}
