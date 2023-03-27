/*  
    将其他类型转换为数值
        1. 使用 number() 函数将其他类型转换为数值

    转换的情况：
        1. 数值字符串：可以转换，比如：'123', '3.14', '3e+13'
        2. 不是合法数值则转换为NaN，比如：'11px'，'abc'
        3. 空串，空格转换为0，比如: ' '
        4. 布尔值，true转换为1，false 转换为0
        5. null 转换为0
        6. undefined 转换为 NaN

    专门将字符串转换为数值的函数：
        - parseInt()：将一个字符串转换为整数，解析时可以自左向右读取所有有效整数，可以转换 '123px'
            - 可以使用parseInt()，对浮点数取整
        - parseFloat(): 将一个字符串转换为小数
*/

let a = '123';

let b = Number(a);
console.log(typeof b, b);

a = 3e+10;
b = Number(a);
console.log(typeof b, b);

let c= '123';
console.log(typeof c, c);
c = parseInt(c);
console.log(typeof c, c);

c= '123px';
console.log(typeof c, c);
c = parseInt(c);
console.log(typeof c, c);

c= '123.45';
console.log(typeof c, c);
c = parseInt(c);
console.log(typeof c, c);

c = 123.45;
console.log(typeof c, c);
c = parseInt(c);
console.log(typeof c, c);
