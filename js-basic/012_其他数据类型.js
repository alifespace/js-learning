/*  
    布尔值(Boolean)
        - 布尔值主要用于逻辑判断
        - 布尔值只有两个 true 和 false
    
    空值(Null)
        - 空值表示空对象
        - 空值只有一个: null
        - 使用 typeof 检查一个空值会返回 "object"
        - 使用 typeof 无法检查 null

    未定义(Undefined)
        - 当声明一个变量声明而没有赋值，它的值就是undefined
        - 只有一个值 undefined
        - 使用 typeof 检查一个 undefined 类型时，会返回 "undefined"
        - undefined 一般 JS 自己使用，如果我们程序中表示空，建议使用 null

    符号(Symbol)
        - 用来创建一个唯一的标识
        - 用于对象中不希望让用户容易访问到的属性
        - 使用typeof 检查 Symbol 时，返回 "symbol"
*/

let bool = true;
console.log(bool, typeof bool);

let a = null;
console.log(a, typeof a);

let b;
console.log(b, typeof b);

let c = Symbol();   // 调用 Symbol 函数创建一个符号
console.log(c);