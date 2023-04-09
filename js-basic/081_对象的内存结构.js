/*  
    对象的内存结构：存储属性的区域有两个：
        - 对象自身
            1. 通过 对象.属性 方式添加的属性
            2. 通过 this.属性 方式添加的属性
            3. 在 class 中通过 x=y 方式添加的属性
        - 神秘位置：原型对象 prototype
            - 对象还有一些内容会存储到其他对象里面（原型对象）
            - 在对象中有一个属性，用于存储原型对象，这个属性叫 __proto__
            - 原型对象也负责为对象存储属性
                - 当我们访问对象中的属性时，会优先访问对象的属性
                - 对象中不包括该属性时，才会去原型对象中寻找
            - 会添加到原型对象的函数
                - 通过 xxx() 方式添加的方法会放在原型对象中
                - 主动向原型中添加的属性和方法
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('我是' + this.name);
    }
}

const p1 = new Person('孙悟空', 18);

console.log(p1);

p1.sayHello();

console.log(p1.__proto__);