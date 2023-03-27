/*  
    1. 使用 Boolean() 函数将其他类型转换为布尔值
    
    2. 转换的情况
        - 数值：非 0 值和 Infinity 转换为 true，0 和 NaN 转换为 false 
        - 字符串：空串转换为 false，其他转换为 true
        - Null 和 Undefined：都转换为 false
        - 对象都会转换为 true
*/

let a = 1;

a = Boolean(a);
console.log(typeof a, a);

a = 0.0;
a = Boolean(a);
console.log(typeof a, a);

let b = 'false';
b = Boolean(b);
console.log(typeof b, b);

let c = ' ';
c = Boolean(c);
console.log(typeof c, c);

