/*  
    instanceOf 用来检查一个对象是不是一个类的实例
        - instanceOf 用来检查该对象的原型链上是不是有该类的实例，有则返回 true
        - instanceOf Object 总返回 true

    使用 in 检查对象的属性中，也是看原型链
*/

class Animal {

}

class Dog extends Animal {

}

const d1 = new Dog();

console.log(d1 instanceof Dog, d1 instanceof Animal);

class Person {
    name = '孙悟空';
    age = 18;

    sayHello() {
        console.log('Hello', this.name);
    }
}

const p1 = new Person();
console.log('sayHello' in p1);

// 检查对象自身是否含有某个属性
console.log(p1.hasOwnProperty('name'), p1.hasOwnProperty('sayHello'));
console.log(Object.hasOwn(p1, 'sayHello'));
console.log(Object.hasOwn(p1, 'name'));
