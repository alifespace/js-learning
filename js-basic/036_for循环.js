/*  
    for 循环：
        - 语法：
            for(初始化表达式; 条件表达式; 更新表达式) {
                语句...
            }
        - 使用 let 声明的变量是局部变量，只能在循环体内访问

    死循环的方式：
        - while（1）{}
        - for (;;) {}
*/

let i = 0;

for(; i < 4; i++) {
    console.log(`i = ${i}`);
}

for(i =3; i < 4; i++) {
    console.log(`i = ${i}`);
}

// j具备块作用域
for (let j = 0; j < 5; j++) {
    console.log(`j = ${j}`);
}