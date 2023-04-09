/*  
    在开发中应该尽量减少在全局作用域中编写代码：
        - 全局作用域容易被其他地方修改

    所以代码尽量编写在局部作用域中
        - 如果使用 let 声明变量，可以使用 {} 来创建块作用域
        - var 没有块作用域，但是有函数作用域

    希望创建一个只执行一次的匿名函数
*/

function fn1() {
    var a = 10;
}

function fn2() {
    var a = 20;
    debugger;
}

fn1();
fn2();

// 立即执行匿名函数 (IIFE) Invoke Function Execute
/*  
    - IIFE是一个只执行一次的匿名执行函数
    - 因为只执行一次，而且是一个函数，所有变量都有函数作用域，所以在团队开发的时候，
        可以把自己的代码包装成一个IIFE，从而避免全局变量的冲突
    - IIFE后面需要加 ;
*/
(function () {
    let a = 10;
    console.log(a);
} ());
debugger