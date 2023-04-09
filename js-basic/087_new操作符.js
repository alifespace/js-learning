/*  
    new 是创建对象的时候要使用的运算符
        - 当一个函数使用 new 时，这个函数被当作构造函数
        - 建立一个 JS 的对象，以下被简称为 newInstance；
        - 将 newInstance [[Prototype]]指定为函数的 prototype 属性；
        - 使用实参执行构造函数，并且进行初始化，将 newInstance 绑定到函数的 this
        - 如果构造函数返回的是一个非原始值，这个返回值成为new表达式的返回值。如果构造函数
            没有返回任何值或者返回原始值，则表达式结果为 newInstance；
        - 通常我们不会为构造函数指定返回值
*/

function MyClass () {

}

let c1 = new MyClass();

console.log(MyClass.prototype, c1.__proto__);

