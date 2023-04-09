/*  
    访问一个对象的原型对象：对象.__proto__, Object.getPrototypeOf(对象)
    _开头的属性一般是一个隐藏属性

    原型对象中的数据：
        1. 对象中的数据
        2. 构造函数 对象.constructor，实际上就是类
        3. 原型对象也有原型，这样构成了一条原型链，根据对象的复杂程度不同，原型链的长度不同
            p对象 --> 原型 --> 原型 --> 原型 --> null
        4. 原型链：
            - 读取对象属性时，会优先使用对象自身属性
                如果对象没有该属性，则在原型链中寻找，直到 null
            - Object 对象没有原型（为null）
        5. 作用域链
            - 作用域链是用于找变量，找不到会报错
            - 原型链是用于找属性的，找不到会返回undefined
*/

class Person {
    name = '孙悟空';
    age = 18;

    sayHello() {
        console.log('Hello', this.name);
    }
}

const p1 = new Person();
console.log(p1.__proto__);
console.log(Object.getPrototypeOf(p1));
console.log(p1.constructor);
console.log(p1.__proto__.__proto__);