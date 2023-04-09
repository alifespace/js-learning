/*  

*/

class Person {
    name
    age

    sayHello() {
        console.log('Hello');
    }
   
    // 静态方法，通过类来调用
    static sayByebye() {
        console.log('Bye bye');
    }
}

const p1 = new Person();

console.log(p1);
p1.sayHello();
Person.sayByebye();