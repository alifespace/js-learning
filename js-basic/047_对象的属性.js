/*  
    属性名：
        - 通常属性名是一个字符串，所以属性名可以是任何值，没有命名要求
            如果属性名太特殊，需要使用中括号来设置
            强烈建议，属性名也按照标识符的规范来命名
        - 也可以使用 symbol 作为属性名
            获取这种属性时，也必须通过 symbol 获取。这个 symbol 类似于一把钥匙
            使用 symbol 添加的属性，通常是不希望外界访问的属性
        - 使用[]去操作属性时，也可以使用变量

    属性值：
        - 对象的属性值可以是任何值，包括对象
*/

let obj1 = Object();
obj1.name = '孙悟空';
obj1['s!3'] = '18';

console.log(obj1, obj1['s!3']);


// 使用 Symbol 作为属性名
let mySymbol = Symbol()
console.log(mySymbol);
obj1[mySymbol] = '通过 Symbol 添加的属性';
console.log(obj1[mySymbol]);
newSymbol = mySymbol;
mySymbol = Symbol();
console.log(obj1[mySymbol], obj1[newSymbol]);

str = 'age';
obj1[str] = '18';
console.log(`obj1['age'] = ${obj1[str]}`);

obj1.f = Object();
obj1.f.name = '猪八戒';
console.log(`obj1.f = ${obj1.f}, obj1.f.name = ${obj1.f.name}`, obj1.f);
console.log(typeof obj1);

// in 运算符用于检查对象中是否含有某个属性，有则返回 true，没有则返回 false
console.log('name' in obj1);