/*  
    早期的JS中，直接通过函数来定义类
        - 一个函数如果直接调用 xxx(), 那么这个函数就是一个普通函数
        - 一个函数如果使用 new xxx()，那么这个函数就是一个构造函数
            1. 等价于 class Person {}
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log(this.name);
}

Person.staticProperty = 'xxx';   // 静态属性

// 静态方法
Person.staticMethod = function () {
    console.log('静态方法');
}

// 将类的定义放在一个立即函数中，这样比较完整
let Thing = (function () {
    function Thing (name, size) {
        this.name = name;
        this .size = size;
    }

    return Thing;
}) ();

let Stamp = (function () {
    function Stamp(name, size) {
        // this.name = name;
        // this.size = size;
    }

    // 继承了Thing
    Stamp.prototype = new Thing();
    return Stamp;
})();

class Animal {

}


const p1 = new Person('孙悟空', 18);
const a1 = new Animal();

console.log(p1);
p1.sayHello();
Person.staticMethod();
console.log(Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(a1));

const st1 = new Stamp('邮票', 10);
console.log(st1.__proto__);

