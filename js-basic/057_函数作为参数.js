/*  
    - 在JS中，函数也是一个对象（函数是JS中的一等公民）
        别的对象能做的事情，函数都可以
    - 为什么我们要把函数作为参数传递：因为我们要传递函数的内容（动态传递代码）
*/

const fn1 = (a) => {
    console.log('a =', a);
    a();
}

const fn2 = () => {
    console.log('我是fn2.');
}

let obj1 = {name: '孙悟空'};
// fn1(123);
fn1(fn2);
fn1(function () {
    console.log('我是匿名函数');
});
fn1(() => console.log('我是箭头函数'));