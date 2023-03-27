// 算数运算符：+、-、*、/
console.log(2 * 3);
console.log (2 ** 3);

// +: 字符串拼接
console.log('周杰' + '伦'); 
console.log(1 + '2');  // '12'，字符串拼接
console.log(1 + +'2');
console.log('1' + 2);   // '12', 字符串拼接, 只要有一边是字符串就执行字符串拼接
console.log(1 + '2log');

// 其他运算符都只能和数字类型连接在一起使用
// console.log(2 - '1');   // Err: 右边需要是一个数值 
console.log(2 - +'1');
let myAge = +'18';   // 需要是一个数字的字符串
console.log(myAge);

// 比较运算符
let num1: number = 3, num2: number = 4;
console.log(3 >= 2);
console.log(num1 === num2);   // 值和数据类型都需要相等
console.log(num1 !== num2);