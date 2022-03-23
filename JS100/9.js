var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//ver 1
var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

//ver 2
var result2 = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);