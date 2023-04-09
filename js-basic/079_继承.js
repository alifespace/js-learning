/*  
    继承：
        - 可以通过 extends 关键字来完成继承；
        - 当一个类继承另外一个类时，就相当于把父类的代码复制到当前类

    封装：提高了代码的安全性
    继承：提高了代码的可扩展性
    多态：提高了灵活性
*/

/* class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('汪汪汪');
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('喵喵喵');
    }
} */

class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('动物在叫');
    }
}

class Dog extends Animal{

}

class Cat extends Animal {
    sayHello() {
        console.log('喵喵喵');
    }
}




const d1 = new Dog('旺财');
const c1 = new Cat('Tom');

d1.sayHello();
c1.sayHello();