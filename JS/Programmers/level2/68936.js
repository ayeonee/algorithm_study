// 월간 코드 챌린지 시즌1 > 쿼드압축 후 개수 세기

// try 1 => 정답이지만 효율성 별로
function solution(arr) {
  let answer = [0, 0];

  function compression(arr) {
    const length = arr.length;
    if (length < 2) return answer[arr[0]]++;
    const half = arr.length / 2;

    const arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = [];
    const set1 = new Set();
    const set2 = new Set();
    const set3 = new Set();
    const set4 = new Set();

    for (let i = 0; i < length; i++) {
      const line1 = [],
        line2 = [],
        line3 = [],
        line4 = [];
      for (let j = 0; j < length; j++) {
        if (i < half && j < half) {
          line1.push(arr[i][j]);
          set1.add(arr[i][j]);
        } else if (i >= half && j < half) {
          line2.push(arr[i][j]);
          set2.add(arr[i][j]);
        } else if (i < half && j >= half) {
          line3.push(arr[i][j]);
          set3.add(arr[i][j]);
        } else if (i >= half && j >= half) {
          line4.push(arr[i][j]);
          set4.add(arr[i][j]);
        }
      }
      line1.length ? arr1.push(line1) : "";
      line2.length ? arr2.push(line2) : "";
      line3.length ? arr3.push(line3) : "";
      line4.length ? arr4.push(line4) : "";
    }
    set1.size === 1 ? compression([...set1]) : compression(arr1);
    set2.size === 1 ? compression([...set2]) : compression(arr2);
    set3.size === 1 ? compression([...set3]) : compression(arr3);
    set4.size === 1 ? compression([...set4]) : compression(arr4);
  }

  compression(arr);
  return JSON.stringify(answer) === JSON.stringify([0, 4])
    ? [0, 1]
    : JSON.stringify(answer) === JSON.stringify([4, 0])
    ? [1, 0]
    : answer;
}

// try2 : every 함수로 효율성 개선
function solution(arr) {
  let answer = [0, 0];

  function compression(arr) {
    const length = arr.length;
    if (length < 2) {
      return answer[arr[0]]++;
    }
    if (arr.every((row) => row.every((cell) => cell === 0))) return answer[0]++;
    if (arr.every((row) => row.every((cell) => cell === 1))) return answer[1]++;

    const half = arr.length / 2;

    const arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = [];

    for (let i = 0; i < length; i++) {
      const line1 = [],
        line2 = [],
        line3 = [],
        line4 = [];
      for (let j = 0; j < length; j++) {
        if (i < half && j < half) line1.push(arr[i][j]);
        else if (i >= half && j < half) line2.push(arr[i][j]);
        else if (i < half && j >= half) line3.push(arr[i][j]);
        else if (i >= half && j >= half) line4.push(arr[i][j]);
      }
      line1.length ? arr1.push(line1) : "";
      line2.length ? arr2.push(line2) : "";
      line3.length ? arr3.push(line3) : "";
      line4.length ? arr4.push(line4) : "";
    }
    compression(arr1);
    compression(arr2);
    compression(arr3);
    compression(arr4);
  }

  compression(arr);
  return answer;
}
