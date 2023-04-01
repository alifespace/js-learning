/*  
    函数返回值：使用 return 语句返回
        - JS 中，任何值都可以是返回值，包括对象、函数
        - return 后没有值，返回 undefined，（没有return的情况下，函数的默认行为）
        - return 一执行，函数立即结束
*/

sum1 = (a, b) => {
    let res = a + b;
    return res;
}

let res = sum1(123, 2);
console.log(`sum is ${res}`);