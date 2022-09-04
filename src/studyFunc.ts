/** 
 * typescript 函数返回多个值 接受函数返回的多个值
*/

function func1(): {data: number, err: string, msg: string} {
	return { data: 1, err: "小昆虫", msg: "爱白菜" };
}

console.log(func1());

{
	let obj = func1();
	console.log('用一个变量接受函数返回的值 ', obj, obj.data, obj.err, obj.msg);
}

{
	let { data: dataT, err: errT, msg: msgT } = func1();
	console.log('用json的方式接受值 ', dataT, errT, msgT);
}

{
	let { data, err, msg } = func1();
	console.log('用json默认字段方式接受值 ', data, err, msg);
}
