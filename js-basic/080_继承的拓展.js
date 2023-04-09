/*  
    继承：
        - 在子类中，可通过创建同名方法来覆盖父类的功能
        - 可以在不修改的父类的情况下对其进行扩展
        - OCP 开闭原则：
            - 程序应该对修改关闭，对拓展开放
*/
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
    constructor(name, age) {
        // 重写构造函数时，构造函数的第一行必须是super()
        super(name);
        this.age = age;
    }

    sayHello() {
        super.sayHello();
        console.log('喵喵喵');
    }
}




const d1 = new Dog('旺财');
const c1 = new Cat('Tom', 18);

d1.sayHello();
c1.sayHello();
console.log(c1);