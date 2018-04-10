const ifElse=(condition,isTrue,isFalse)=>{
  return condition ? isTrue: isFalse;
};


const logTrue=() =>{ console.log(true);};
logTrue();
const logFalse=() => {console.log(false);};
logFalse();

ifElse(true,logTrue,logFalse);

//passing arguments
var increment =function(n){return n + 1;};
var square = function(n){return n*n;};
var doMathSoIDontHaveTo=function(n,func){return func(n);};
console.log(doMathSoIDontHaveTo(5,square)); //25
console.log(doMathSoIDontHaveTo(4,increment));//5
