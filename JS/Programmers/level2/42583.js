// 스택/큐 > 다리를 지나는 트럭

//try 1 : success, 시간 넘 오래 걸리는 듯
function solution(bridge_length, weight, truck_weights) {
  let cnt = 0;
  let now_weight = 0;
  const truck_cnt = truck_weights.length;
  const truck_weights_r = truck_weights.reverse();
  const bridge = [];
  const done = [];

  let go = 0;
  while (done.length < truck_cnt) {
    if (bridge.length === bridge_length) {
      const passed = bridge.shift();
      now_weight -= passed;
      if (passed !== 0) done.push(passed);
    }
    if (now_weight <= weight) {
      go = truck_weights_r[truck_weights_r.length - 1]; // 이 부분이 undefined 처리될 수 있는 것도 별로!!
      if (now_weight + go <= weight && bridge.length < bridge_length) {
        const truck = truck_weights_r.pop();
        now_weight += truck;
        bridge.push(truck);
      } else {
        bridge.push(0);
      }
    }
    cnt++;
  }
  return cnt;
}

// best ans
function solution(bridge_length, weight, truck_weights) {
  let time = 0,
    bridge = [[0, 0]],
    now_weight = 0;
  while (bridge.length > 0) {
    if (bridge[0][1] === time) now_weight -= bridge.shift()[0];
    if (truck_weights[0] + now_weight <= weight) {
      const truck = truck_weights.shift();
      now_weight += truck;
      bridge.push([truck, time + bridge_length]);
    } else {
      if (bridge[0]) time = bridge[0][1] - 1;
    }
    time++;
  }
  return time;
}
