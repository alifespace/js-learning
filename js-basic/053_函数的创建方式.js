/*  
    函数的定义方式：
        - 函数声明
            function 函数名(参数列表) {
                语句...
            }

        - 函数表达式: 匿名函数
            const fn2 = function () {
                语句2...
            }

        - 箭头函数
            () => {
                语句...
            }
*/

function fn1() {
    console.log('函数声明');
}

const fn2 = function() {
    console.log('函数表达式');
}

fn3 = () => {
    console.log('箭头函数');
}

fn4 = () => console.log('箭头函数');

console.log(typeof fn1);
console.log(typeof fn2);
console.log(typeof fn3);
console.log(typeof fn4);

fn4();