/*  
    switch 语句：
        - case 是代码开始执行的起始位置，使用 break 来结束 switch 语句
        - 表达式必须全等
    
    总结：
        - switch 和 if 功能重合
        - 最大的不同在于 switch 在多个全等判断时，结构比较清楚
*/
let a = '1';

switch(a) {
    case '1':
        console.log('一');
        break;
    case 2:
        console.log('二');
        break;
    default:
        console.log('其他');
}