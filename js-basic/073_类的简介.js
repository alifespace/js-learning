/*  
    1. 使用 Object 创建对象，无法区分不同类型的对象
        - 不方便批量创建对象

    2. 在JS中，通过class来解决这个问题
        - 类是创建对象的模板，可以将对象的属性和方法直接定义在类中，我们可以通过类来创建对象

    3. 语法
        - class 类名 {}
        - const 类名 = class {}
        - 类名一般用驼峰命名法

    4. 通过类来创建对象
        - new 类名()    // 调用构造函数来创造对象
        - 通过同一个类创建的对象，被称为同类对象
            - 可以通过instanceof来检查某个对象是不是指定类的实例
*/

class Person {

}

class Dog {

}

const five = {
    name: '王老五',
    age: 48,

    sayHello() {
        console.log('你好，', this.name);
    }
}

const dog = {
    name: '大黄',
    color: 'yellow',

    sleep() {
        console.log(this.name, '开始睡觉');
    }
}

dog.sleep();
console.log(Person);

const p1 = new Person();

const d1 = new Dog();
console.log(p1, typeof p1, p1 instanceof Person, p1 instanceof Object);
console.log(d1, typeof d1, d1 instanceof Person);