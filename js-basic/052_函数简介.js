/*  
    函数（Function）: 存储代码的对象
        - 函数也是一个对象，具备对象所有的功能
        - 函数中可以存储代码，可以在需要时调用
        - 使用 typeof 函数对象，返回 function
*/

// 创建一个函数对象

function fn1() {
    console.log('你好');
    console.log('hello');
    console.log('笨猪');
}

function fn2() {

}

console.log(fn1, typeof fn1);
console.log(fn2);

for (propName in fn1) {
    console.log(propName);
}

// 调用函数: 执行函数的代码