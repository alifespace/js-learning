/*  
    流程控制语句：改变程序执行的顺序
        - 条件判断语句：
        - 条件分支语句：
        - 循环语句：

    条件判断语句（if）:
        - 语法：
            if(条件表达式) {
                语句1;
                语句2;
            } else {
                语句...
            }
        - 如果 if 后面的表达式不是布尔值，会转换为布尔值后进行判断
*/

if(100) {
    console.log('执行');
}

let a = 10;
let age = 50;

if (age >= 60) {
    console.log('你已经退休了');
} else {
    console.log('你还需要继续努力');
}

age = 5;
if (age >= 100) {
    console.log('你真是一个长寿的人');
} else if(age >= 80) {
    console.log('你很年轻啊');
} else if(age >=60) {
    console.log('可以退休了');
} else if(age > 30) {
    console.log('你已经中年了');
} else if(age >18) {
    console.log('你已经成年了');
} else{
    console.log('未成年啊');
}

a = '10';
console.log(+a, typeof +a);