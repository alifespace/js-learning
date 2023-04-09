/*  
    所有的同类对象他们的原型对象都是同一个
        - 也就意味着同类对象的原型链是一样的
        - JS的继承是通过原型来实现的
            - 当继承的时候，子类的原型就是一个父类的实例

    原型的作用
        - 由于同类型对象的原型对象都是一个，所以原型对象相当于一个公共区域，可以被所有实例访问
            可以将类的所有公共属性（方法）统一存储到原型中，
            这样我们只需要创建一个属性，就可以被所有对象实例访问
        - 在对象中有些属性值（name, age）是对象独有的，但是有些属性应该是一样的，比如方法
            对于这些一样的值，没有必要重复创建
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
console.log(p1.__proto__);
console.log(p1 === p2);
console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2));

// JS的继承是通过原型实现的

class Animal {

}

class Cat extends Animal {

}

// Cat --> Animal --> Object --> Object的原型 --> null
const c1 = new Cat();
console.log(c1);
console.log(Object.getPrototypeOf(c1));


