/**
将对线转化为数组 然后再转化为对象数组
输入
{"Submitted":83,"Missing Data":10,"No Data":12,"Changed Data":9}
输出
[ 
{ category: "Submitted", value: 83}, 
{ category: "Missing Data", value: 10}, 
{ category: "No Data", value: 12}, 
{ category: "Changed Data", value: 9 },
]
*/

// 对象会转化成为二维数组
var S9B = Object.entries({ "Submitted": 83, "Missing Data": 10, "No Data": 12, "Changed Data": 9 });

var chartdata: { [key: string]: any }[] = [];
for (let i = 0; i < S9B.length; i++) {
	chartdata[i] = {
		category: S9B[i][0],
		value: S9B[i][1]
	}
}


/* 将  [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}] 变成 [{1: 10}, {2: 20}, {3: 30}] */
// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}]

interface item {
	value: string;
	key: number;
}
var kvArray: item[] = [{ key: 1, value: 'Tom' }, { key: 2, value: 'John' }, { key: 3, value: 'Mike' }];


var reformattedArray = kvArray.map(function (obj) {
	var rObj: { [index: number]: string } = {}; // 在typescript中声明 {} 需要类型
	rObj[obj.key] = obj.value;
	return rObj;
});


/* 
将    {"Submitted":87,"No Data":2,"Changed Data":7,"New Data":3}
变成  [{"Submitted":187}, {"No Data":102}, {"Changed Data":107}, {"New Data":103}]
变成  [{label:"Submitted", value:187}, {label:"No Data", value:102}, {label:"Changed Data",  value:107}, {label:"New Data", value:103}]
*/

var input: { [index: string]: number } = { "Submitted": 87, "No Data": 2, "Changed Data": 7, "New Data": 3 };   // 在typescript中声明 {} 需要类型

var reformattedinput = Object.keys(input).map((obj) => {
	var rObj: { [index: string]: number } = {};
	rObj[obj] = input[obj] + 100;
	return rObj;
});
// reformattedinput 数组为： [{"Submitted":187}, {"No Data":102}, {"Changed Data":107}, {"New Data":103}]

var reformattedinput2 = Object.keys(input).map((obj) => {
	const data = {
		label: obj,
		value: input[obj],
	};
	return data;
});
// reformattedinput2 数组为： [{label:"Submitted", value:187}, {label:"No Data", value:102}, {label:"Changed Data",  value:107}, {label:"New Data", value:103}]


/*
编写自动创建长度固定数组
*/
//判断是否为 never 的类型工具
type IsNever<T> = [T] extends [never] ? true : false

// 用于判断两个泛型是否相同，只要一个泛型传入 Len, 零一个泛型传入 number，就能判断 Len 是否为 number 本身
type IsTypeSelf<TA, TB> = TA extends TB ? TB extends TA ? true : false : false

// 判断 Len 是否为合法的 number 字面量类型
type IslegalNumber<N> = IsNever<N> extends true ? false : IsTypeSelf<number, N> extends true ? false : true

type FixedArray<T = any, Len extends number = 6, List extends Array<T> = []> =
    IslegalNumber<Len> extends false
    ? List
    : List['length'] extends Len // 判断 `List['length']` 是否等于 `Len`
    ? List // 是就返回 List 本身
    : FixedArray<T, Len, [...List, T]> // 不是就递归，注意传入的数组添加了新的元素 T

// 生成了一个长度为30，元组类型都为 string 的元组
type FixedArrayInstance = FixedArray<string, 30>

 

var done = 'Done!';