/*  
    循环语句
        - 使用循环语句使得代码反复执行
        - while、do...while、for

    while语句
        - 语法：
            while(条件表达式) {
                语句...
            }
        - 执行流程：
            1. 先对条件表达式进行判断，结果为 true，执行循环体；
            2. 执行完毕后，再次判断条件表达式
            3. 直到条件表达式为 false

        - 循环的三要件
            1. 初始化表达式
            2. 条件表达式
            3. 更新表达式

        - 注意事项：
            1. 当条件表达式恒为 true，循环语句是死循环
            2. break 也可以用于结束循环语句

*/

let i = 0;

while (i < 5) {
    console.log(`i = ${i}`);
    i++;
}

/*  
    练习：

        银行存款利率为 8%，1000存款什么时候变成 5000 元
*/

let year = 0;
let beginMoney = 1000;

while (beginMoney < 5000) {
    year++;
    beginMoney *= 1.08;
}
console.log(`years = ${year}`);

