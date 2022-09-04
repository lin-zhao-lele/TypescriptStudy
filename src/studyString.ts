/* 
输入为 /homepage/configuration=MADA%20config1&date=09-12-2021
提取 /homepage/ 以外的部分 存为map
{
 (configuration, MADA%20config1), 
 (date, 09-12-2021)
}
*/ 

const inputStudyString:string = "/homepage/configuration=MADA%20config1&date=09-12-2021";

const parametersMap = new Map<string, string>();

inputStudyString.replace("/homepage/","").split("&").map(function(obj) {
	const objArray = obj.split("=");
	if (objArray.length === 2){
		parametersMap.set(objArray[0],objArray[1]);
		}
		return obj;
});

/* 
输入
&isoStatementDays=CAISO;S9B;09/01/2021::CAISO;S70B;06/28/2021::CAISO;S11M;11/03/2020

存为map
{
 (CAISO, CAISO;S9B;09/01/2021::CAISO;S70B;06/28/2021::CAISO;S11M;11/03/2020), 
 (CAISO;S9B;,  09/01/2021), 
 (CAISO;S70B;, 06/28/2021), 
 (CAISO;S11M;, 11/03/2020)
}
*/ 

const data:string = "&isoStatementDays=CAISO;S9B;09/01/2021::CAISO;S70B;06/28/2021::CAISO;S11M;11/03/2020";
const dataSplit:string[] = data.substring(data.indexOf("=")+1).split("::");
let groupDateMapping = new Map<string, string>();

dataSplit.forEach( (item:string)=>{
	const items:string[] = item.split(";");
	groupDateMapping.set(items[0] + ';' + items[1] + ';', item);
});

groupDateMapping.set(dataSplit[0].split(";")[0], data.substring(data.indexOf("=")+1));

