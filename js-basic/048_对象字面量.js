/*  
    对象字面量：
        - 可以使用 {} 来创建对象；
        - 使用 {} 创建对象，可以直接添加属性；
*/

let obj1 = Object();

console.log(obj1);

let obj2;
obj2 = {};
obj2.name = '孙悟空';
console.log(typeof obj2, obj2);

mySymbol = Symbol()
let obj3 = {
    name: '猪八戒',
    age: 18,
    ['gender']: '男',
    [mySymbol]: '特殊属性',
    hello: {
        a: 1,
        b: true,
    }
};

console.log(typeof obj3, obj3, obj3.hello.b);
