const {name,room,weapon}={"name":"Rusty","room":"kitchen","weapon":"candlestick"};
console.log(name);
console.log(weapon);
console.log(room);

//desturcturing an array.
var [a,b]=[1,2];
console.log(a,b); //= 1 2
//omit certain values
var [a, ,b]=[1,2,3];
console.log(a,b); //1 3
//combine with spread/rest operator(accumulates the rest of the values)
var [a, ...b]=[1,2,3];
console.log(a,b);//1 [2,3]
//swap variables easily without temp
var a=1,b=2;
//var temp=a;
//a=b;
//b=temp;no
[b,a]=[a,b];
console.log(a,b);
var[a,[b,[c,d]]]=[1,[2,[[[3,4],5],6]]];
console.log("a:",a,"b:",b,"c",c,"d",d);
