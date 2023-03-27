let a = 10;
let b = 10n;

console.log(a, b);
console.log(b + 1n);

/*  
    typeof 运算符：检查不同值的类型，不是变量的类型。JS中，变量没有类型的概念

*/
console.log(typeof b);
console.log(typeof NaN);
console.log(typeof Infinity);

let c = 'Hello JS';
console.log(typeof c);