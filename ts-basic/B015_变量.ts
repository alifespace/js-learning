// 声明一个变量及其类型，并给变量赋值
// 类型注解：为变量添加类型约束的方式
// 变量的命名规则：只能是数字、字符、下划线、$，并且不能以数字开头
// 变量规则：区分大小写，推荐使用驼峰命名法
let age: number;

// console.log(age);   Err：变量在初始化前不可以使用

age = 18;

console.log(age);

// ts中的数据类型分为两大类：基本数据类型、对象类型；
// 基本数据类型5种：number（整数和浮点类型）、string、Boolean、undefined、null

// number 数字类型
let size: number = 18;
let score: number = 99.9;

console.log(size, score)

let salary: number = +10000;
let salaryWithGirlfriend: number = -2000;
console.log(salary, salaryWithGirlfriend)

// string 字符串类型，可以使用单引号和双引号，建议使用单引号
let strFood: string = '糖葫芦';
console.log(strFood)

// boolean 只有两个值true和false
let isStudying: boolean = true;
let isPlayingGame: boolean= false;
console.log(isStudying, isPlayingGame)

// undefined（声明但是未赋值）, null（声明了变量，赋值为null）, 只有一个值
let u: undefined = undefined;
let n: null = null;
let u1: undefined;

console.log(u, n, u1);
