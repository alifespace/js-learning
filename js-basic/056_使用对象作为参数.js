/*
    - 修改对象时，如果有其他变量指向该对象，所有变量都受到影响 
    - 每次调用函数时，默认值都会重置 
*/

const fn1 = (a) => {
    console.log(`a = ${a}`, a);
    a.name = '猪八戒';
}

const fn2 = (a = {name: '沙和尚'}) => {
    console.log(a);
    a.name = '猪八戒';
    console.log(a);
}

let obj1 = {name: '孙悟空'};
fn1(obj1);  // 传递实参时，不是变量本身，传递的是变量的值
console.log(obj1);

fn2();
fn2();