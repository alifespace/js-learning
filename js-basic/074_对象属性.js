/*  
    类是创建对象的模板，OOP第一件事先创建类
        - 类的代码块，默认是严格模式
*/

class Person {
    name
    age

    // 类属性：只能通过类访问，实例无法访问
    static test = '类属性' 
};

const p1 = new Person();

console.log(p1);
console.log(Person.test);
