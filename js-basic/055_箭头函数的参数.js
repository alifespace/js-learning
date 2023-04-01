/*  */

const fn1 = (a, b) => {
    console.log(`a = ${a}, b =${b}`);
}

// 当箭头函数只有一个参数的时候，() 可以不写
const fn2 = a => {
    console.log(`a = ${a}`);
}

fn1(123, 456);
fn2(789);

// 定义参数的时候可以指定默认值，默认值会在没有对应实参的时候生效
const fn3 = (a = 10, b = 20, c = 30) => {
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}
fn3(1, 2, 3);
fn3(1, 2);