/* 变量声明*/
var myname: string = "koma";
console.log(`myname is ${myname}.`);

// 字符数组
var STRING_ARR = ['test1', 'test2', 'test3'];

let arr1: number[] = [1, 2, 3];
let arr3: Array<number | string> = [1, 2, 3, 'a']

var stringArr: string[] = ['tes4', 'test5', 'test6'];
console.log(`stringArr is ${stringArr[0]}  + ${stringArr[1]} + ${stringArr[2]}`);

// JS 对象
var indexedArray: { [key: string]: number } = { foo: 2118, bar: 2218, tool: 2318 };
// 如何向对象中添加元素
indexedArray['tool2'] = 2418;
// 修改对象中的元素
indexedArray['tool'] = 2518;
console.log(`indexedArray is ${indexedArray.foo}  + ${indexedArray.bar} + ${indexedArray.tool}  + ${indexedArray.tool2}`);



// JS 对象数组
var kvArray2: { [key: string]: number }[] = [{ key: 1, value: 2 }, { key: 3, value: 4 }, { key: 5, value: 6 }];

/* 接口声明*/
interface Person {
	name: string;
	age: number;
}
// 接口使用
let aMan: Person = { name: 'Tom', age: 25 };




/* 强制类型转换*/
var numberVar: number = 1234;
console.log(`强制类型转换.`);
console.log(`number is ${numberVar}.`);

myname = numberVar as unknown as string + ' as unknown as string';
console.log(`myname is ${myname}.`);

myname = numberVar as any as string + ' as any as string';
console.log(`myname is ${myname}.`);