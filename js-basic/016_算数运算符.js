/*  
    运算符（操作符）：
        - 运算符可以用来对1个或者多个操作数进行运算
        - +、-、*、 /、**（幂运算）
        - %，取模，两个数相除取余数
*/

let a = 1 + 1;
console.log(a);

let b = 10 / 3;
console.log(b);

b = 9 ** .5;
console.log(b);

/*  
    JS是一门弱类型语言，当进行运算时会通过自动类型转换来完成运算
    - 算数运算时，除了字符串加法
        - 对于非数值类型会自动转换为数值
        - 任意一个值和字符串做加法运算时，会全部转换为字符串
            - 任意类型 + ''，可以转换为字符串，其原理和 Sting() 相同，但使用起来更加简洁    
*/
a = 10 - '5';
console.log(a);

a = 10 * '5';
console.log(a);

a = 10 + true;
console.log(a);

a = 6 + undefined;
console.log(a);

a = 1 + '2';
console.log(typeof a, a);

a = undefined + '2';
console.log(typeof a, a);

a = true + '';
console.log(a);