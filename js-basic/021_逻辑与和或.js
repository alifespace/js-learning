/*  
    && 逻辑与
        - 可以对两个值进行与运算，两个值都为 true，返回 true。否则返回 false
        - 与运算是短路运算，第一个值是false，第二个值不会计算
        - 与运算是找 false，找到就直接返回 false
        - 对于非布尔值进行与运算，会转换为布尔值进行运算，然后返回原值

    || 逻辑或
        - 可以对两个值进行与运算，两个值有一个为 true，返回 true。否则返回 false
        - 或运算是短路运算，第一个值是 true，第二个值不会计算
        - 或运算是找 true，找到就直接返回 true
        - 对于非布尔值进行或运算，会转换为布尔值进行运算，然后返回原值
*/

let result = true && true;
let a = 1;

console.log(result);
console.log(false && a++);
console.log(`a = ${a}`);

// result = 1 && 2;      返回 2
result = 2 && NaN;
console.log(result);