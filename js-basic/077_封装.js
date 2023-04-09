/*  
    OOP的三个特点：封装、继承、多态

    1. 封装
        - 对象是一个用来存储不同属性的容器
        - 对象不仅仅负责存储属性，还要负责数据的安全（合理性）
        - 直接添加到对象的属性并不安全，因为可能被任意修改
        - 如何确保数据的安全:
            1. 私有化数据, #号开头，私有数据只能在类中访问
            2. 提供set和get方法来开放对私有数据的操作
                - 通过setter和getter可以提供对属性读取的控制
                - 可以对属性值进行验证
        - 封装主要用来保证数据的安全
            1. 属性私有化
            2. 通过 getter 和 setter 方法来操作属性
                get 属性名() {
                    return this.#属性名;
                }

                set 属性名(参数) {
                    this.#属性名 = 参数;
                }
*/

class Person {
    #name;
    #age;
    #gender;

    constructor(name, age, gender) {
        this.#name = name;
        this.#age = age;
        this.#gender =gender;
    }


    sayHello() {
        console.log(this.name);
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    get gender() {
        return this.#gender;
    }

    set gender(gender) {
        this.#gender = gender;
    }
}

const p1 = new Person('孙悟空', 18, '男');
console.log(p1.getName());
console.log(p1.gender);
p1.gender = '不男不女';
console.log(p1.gender);
console.log(p1);

