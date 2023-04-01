/*  
    可以对数值取反
    +: 正号
    -：负号

    当我们对非数值类型进行正负运算时，JS会将其转换为数值，再运算
*/

let a = -10;
a = -a;
console.log(a);

// let b = '123';
let b = '123px';
b = +b;
console.log(typeof b, b);