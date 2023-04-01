/*  
    赋值运算符用于将一个值赋值给一个变量( = )
        - 变量在等号左边时才是变量，在等号右边时是一个值
        - ??=：空赋值，只有当变量为null和undefined时才会赋值
*/

let a = 10;
let b = a;
a ??= 101;

console.log(a);

a = null;
a ??= 101;
console.log(`a = ${a}`);