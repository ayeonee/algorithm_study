//ver 1

var arr1 = [200, 100, 300];
arr1.pop();
arr1.push(10000);
arr1.push(300);
console.log(arr1);

//ver 2
var arr2 = [200, 100, 300];
arr2.splice(2, 0, 10000);   // 변경할 인덱스, 제거할 수, 추가할 수
console.log(arr2);