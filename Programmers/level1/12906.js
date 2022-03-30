function solution(arr) {
  const copiedArr = arr.slice();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) copiedArr[i + 1] = -1;
  }
  return copiedArr.filter((el) => el !== -1);
}

function solution2(arr) {
  return arr.filter((el, index) => el !== arr[index + 1]);
}
