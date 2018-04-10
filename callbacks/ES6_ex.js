//var increment =function(n){return n + 1;};
//var square = function(n){return n*n;};
//var doMathSoIDontHaveTo=function(n,func){return func(n);};
//console.log(doMathSoIDontHaveTo(5,square)); //25
//console.log(doMathSoIDontHaveTo(4,increment));//5

// convert this into ES6

const increment=(n)=>{return n+1; }
const square=(n)=>{return n*n; }
const doMathSoIDontHaveTo=(n,func)=>{return func(n); };

console.log(doMathSoIDontHaveTo(5,square));
console.log(doMathSoIDontHaveTo(4,increment));

  //Passing Arguments:
const ifElse=(condition,isTrue,isFalse,...args)=>{
  console.log(args)
  return condition ? isTrue(...args):isFalse(...args);
  isTrue("Hi","Bye","Hola")
};

const fn1=()=>{console.log(true);};
const fn2=()=>{console.log(false);};

ifElse(true,fn1,fn2,"Hi","Bye","Hola");
