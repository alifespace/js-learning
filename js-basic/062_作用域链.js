/*  
    作用域链：
        - 当我们使用一个变量时，JS会优先在当前作用域中找，如果找到就直接使用
        - 如果没有找到，就会在上一个作用域中找，直到全局作用域
        - 如果全局作用域都没有找到，就报错
*/

let a = 10;
console.log(a);

fn1 = () => {
    console.log(a);
    {
        console.log(a);
    }
}

fn1();
console.log(a);

let b = 10;

{
    let b = '第一代码块中的b';
    {
        
        console.log(b);
    }
}