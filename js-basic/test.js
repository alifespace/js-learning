/*  
    this
        - 函数在执行时，JS解析器每次都会传递一个隐含的参数
        - 这个参数叫做 this
*/

function fn1() {
    console.log('Line1');
    console.log(this);
}

fn1();

process.stdout.write("Hello World"); 
process.stdout.write('test');