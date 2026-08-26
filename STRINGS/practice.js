let s3= "SUCCESSFUL";
 console.log(s3.substring(3,4));
console.log(s3);
console.log(s3.substr(3,4));
console.log(s3);

console.log(typeof(String(-1)));//-1 ,string
console.log(typeof(String(false)));//0,string
console.log(typeof(String(true)));//1,string
console.log(typeof(String(NaN)));//NaN,string
console.log(typeof(String(undefined))); //undefined,string
console.log((typeof(String(null))));//null, string

console.log(((parseInt(undefined))));//NaN ,number
console.log(((parseInt("undefined"))));//NaN ,number
console.log(((parseInt(NaN))));//NaN ,number
console.log((parseInt(null)));//NaN ,number
console.log(typeof(parseInt(-1)));//-1 ,number
console.log(typeof(parseInt(false)));//NaN,number
console.log(typeof(parseInt(true)));//NaN,number

console.log(((parseInt(undefined))));//NaN ,number
console.log(((parseInt("undefined"))));//NaN ,number
console.log(((parseInt(NaN))));//NaN ,number
console.log((parseInt(null)));//NaN ,number
console.log(typeof(parseInt(-1)));//-1 ,number
console.log(typeof(parseInt(false)));//NaN,number
console.log(typeof(parseInt(true)));//NaN,number

console.log((parseInt(12.998)));
console.log((parseInt(null)));
console.log((parseInt(undefined)));
console.log((parseInt(NaN)));
console.log((parseInt(false)));

console.log((parseFloat(12.998)));
console.log((parseFloat(null)));
console.log((parseFloat(undefined)));
console.log((parseFloat(NaN)));
console.log((parseFloat(false)));

console.log((parseFloat(12.998)));
console.log((Number(null)));

console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(NaN));
console.log(typeof(-1));
console.log(parseFloat(""));//0
console.log(+"5",typeof(+"5"));
console.log(+"uu",typeof(+"jj"));
console.log(+"1.23",typeof(+"1.23"));
console.log(+null);
console.log(+undefined,typeof(+undefined));
console.log(+NaN,typeof(+NaN));
console.log(+false,typeof(+false));

//Array.from() - This is highly useful for deduplicating arrays by converting an array to a Set and then back to an array.
const uniqueSet = new Set([1, 2, 2, 3, 4, 4]);
const uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray); // [1, 2, 3, 4] 
