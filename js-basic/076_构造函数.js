/*  

*/

class Person {
    // 在类中可以添加一个特殊的方法constructor，方法名固定，这个方法叫构造函数
    // 构造函数会在调用类创建对象 (new) 时执行
    constructor(a, b, c) {
        console.log('构造函数执行');
        this.name = a;
        this.age = b;
        this.gender = c;
    }

    sayHello() {
        console.log(this.name);
    }
}

const p1 = new Person('孙悟空', 18, '男');
const p2 = new Person();

console.log(p1);
console.log(p1 === p2);