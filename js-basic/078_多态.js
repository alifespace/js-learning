/*  

*/

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const p1 = new Person('小李');
const d1 = new Dog('旺财');

console.log(p1);
console.log(d1);

/*  
    定义一个函数，接受一个对象作为参数，打印对象的名字

    多态
        - 在JS中不会检查参数的类型，意味着任何数据都可以作为参数传给函数
        - 要调用函数，无需指定类型，只有参数满足某些条件即可
        - 多态为我们提供了灵活性
*/

function sayHello(obj) {
    console.log('Hello', obj.name);
}

sayHello(p1);
sayHello(d1);