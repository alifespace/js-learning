/*  
    箭头函数：
        - (参数) => 返回值;
    
    例子：
        无参数箭头函数： () => 返回值；
        1个参数：a => 返回值;
        多个参数：(a, b, ...) => 返回值；

        只有一个返回值的箭头函数：() => 返回值;
        只返回一个对象的函数：() => ({...})
        有多行语句的箭头函数: () => {语句1;
            ......
            return 返回值;}

    箭头函数没有自己的 this, 他的this是由外层作用域的 this 决定的
        - 箭头函数涉及的一个目的在于，箭头函数的this，永远指向外层作用域的 this
    
    
*/

function fn1() {
    console.log('fn1() -> ', this);
}

const fn2 = () => {console.log('fn2() ->', this);}

const obj1 = {
    name: '孙悟空',
    fn1: fn1,  // 等价于fn1,
    fn2: fn2,
    sayHello: function() {    // 等价于sayHello() {
        console.log(this.name);
        function t() {
            console.log('t -->', this);
        }
        t();

        const t1 = () => {
                console.log('t1 -->', this);
        }
        t1();
    },
};

fn1();
fn2();
obj1.fn1();
obj1.fn2();
obj1.sayHello();
