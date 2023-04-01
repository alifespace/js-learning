/*  
    箭头函数的返回值
        - 如果直接在箭头后面设置对象字面量作为返回值，对象需要使用 () 括起来；
*/

const fn1 = (a, b) => {return a+b};
const fn2 = (a, b) => a+b;
const fn3 = (a, b) => ({name: '孙悟空'});

let a = 10, b = 20;
console.log(fn1(10, 20));
console.log(fn2(20, 30));
console.log(fn3(10, 15));