/*  
    大部分情况下，我们不需要修改原型对象
        - 不建议通过类的实例去修改原型（影响了所有的类实例）

    除了通过__proto__来访问原型外：
        - 还可以通过类的prototype来访问原型
        - 修改原型时，最好通过类来修改
            好处：
                - 修改所有实例的原型
                - 无需创建实例即可完成对原型的修改

    原则：
        - 原型尽量不要修改
        - 要改也不要通过实例修改，而是通过 类.prototype 来修改
        - 不要给 prototype 赋值
*/

class Person {
    name = '孙悟空';
    age = 18;

    sayHello() {
        console.log('Hello', this.name);
    }
}

const p1 = new Person();
const p2 = new Person();

class Dog {

}

class Animal {

}

class Cat extends Animal {

}

p1.__proto__ = new Dog();
console.log(p1);

const c1 = new Cat();
const c2 = new Cat();
console.log(c1, c2, c1.__proto__, c2.__proto__);
console.log(Cat.prototype);  // 通过类来访问Cat实例的原型对象
c1.__proto__ = new Person();

console.log(c1, c2, c1.__proto__, c2.__proto__);