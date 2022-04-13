// 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천

function solution(new_id) {
  const step4done = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");
  const step5done = step4done.length === 0 ? "a" : step4done;
  const step6done =
    step5done.length > 15
      ? step5done.slice(0, 15).replace(/\.$/, "")
      : step5done;
  const finalLength = step6done.length;
  return finalLength <= 2
    ? step6done + step6done[finalLength - 1].repeat(3 - finalLength)
    : step6done;
}
