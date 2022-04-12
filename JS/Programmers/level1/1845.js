// 찾아라 프로그래밍 마에스터 > 폰켓몬

function solution(nums) {
  const set = [...new Set(nums)];
  return set.length <= nums.length / 2 ? set.length : nums.length / 2;
}
