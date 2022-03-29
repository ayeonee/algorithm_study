function solution(arr) {
  return (average =
    arr.reduce((sum, v) => {
      return sum + v;
    }) / arr.length);
}
