// 연습문제 > 가장 큰 정사각형 찾기

//..ing (예외처리필요)
function solution(board) {
  if (board.length < 2 || board[0].length < 2) {
    return board[0][0] === 1 || board[1][0] === 1 ? 1 : 0;
  }
  let answer = 0;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
        if (board[i][j] > answer) answer = board[i][j];
      }
    }
  }
  return answer * answer;
}
