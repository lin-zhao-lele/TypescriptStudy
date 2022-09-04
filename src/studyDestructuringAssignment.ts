// 变量声明并赋值时的解构
var foo = ["one", "two", "three"];
var [one, two, three] = foo;

console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [100, 200, 30, 40, 50];


console.log(a);
// expected output: 100
console.log(b);
// expected output: 200
console.log(rest);
// expected output: Array [30,40,50]

// 交换变量
console.log(" 交换变量 ");  
[a, b] = [b, a];
console.log(a); // 200
console.log(b); // 100

// 对象合并时的解构
console.log(" 对象合并 ");  
var x = {name: "xiaoming", age:20};
var y = {age:30};
var z = {...x, ...y};
console.log(x);
console.log(y);
console.log(z);
// expected output: {name: "xiaoming", age:30}

