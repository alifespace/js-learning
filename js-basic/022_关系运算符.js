/*  
    关系运算符：用来检查两个值的关系是否成立，返回布尔值
        - 关系：>、<、>=、<=、!=
        - 不同类型的比较：
            - 5 < '10'：返回 true
            - 1 > false：返回 true
            - 对于非数值进行关系运算时（两边不都是字符串），会先转换为数值

    相等运算符：
        - ==
            - 比较两个值是否相等
            - 使用相等运算符进行比较时，JS会转换为相同类型（通常转换为数值）进行比较
            - 类型转换后，数值一样就会返回 true
            - null 和 undefined 相等比较返回 true
            - NaN 不和任何值相等，包括和自身也不等
        - === 全等运算符
            - 不会进行自动的类型转换，两个值的类型不同，直接返回 false
            - null 和 undefined 相等不全等
            - 一般建议用全等
        - !=
            - 不等，自动进行类型转换
        - !==
            - 不全等，不会自动类型转换
*/

let result = 5 < '10';
console.log(result);

result = 5 < '10px';
console.log(result);

result = 'a' < 'b';
console.log(result);

result = (NaN == NaN);
console.log(result);

result = '1' < 'a';
console.log(result);

let a = '12';
result = +a > '2';
console.log(result);

// 检查Number是不是在 5~10 之间
let num = 12;
result = 5 < num && num < 20;
console.log(result);

result = (1 == '1');
console.log(result);

result = (true == '1');
console.log('true == "1": ', result);

result = (1 === '1');
console.log(result);

// 不转换为数值
result = (null == undefined);
console.log('null == undefined: ', result);

result = 1 != 2;
console.log(result);

result = 1 != '1';
console.log(result);

result = NaN != NaN;
console.log(result);