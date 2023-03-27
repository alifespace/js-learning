/*  
    类型转换：将一种类型转换为其他的类型(字符串、数值和布尔值)

    转换为字符串（实际是创建了一个字符串）：
        1. 调用toString()方法将其他类型转换为字符串
            - 由于 null 和 undefined 没有 toString() 方法，所以不可使用
        2. 调用String()函数将其他类型转换为字符串
            - 对于拥有 toString() 方法的值调用 Sting() 函数时，就是调用 toString() 方法
            - 对于 null，则直接转换为 "null"
            - 对于 undefined，则直接转换为 "undefined"

*/

let a = 10;
a = true;
console.log(typeof a, a);

let b = a.toString()
console.log(typeof b, b);

b = null;
b = String(b);
console.log(typeof b, b);
