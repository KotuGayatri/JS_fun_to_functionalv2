const createTuple=(a,b,c,...d)=>{
  //console.log(arguments); //["It","be","could","anyone","no one"]
 return console.log([[a,c],[b,d]]);
}
createTuple("It","be","could","anyone","no one");


//Default values
const add=function(a,b=2){
  console.log(arguments); //3
  return a+b;
};
console.log(add(3));//5

//rewriting

const add1=function(a,b){
  b=b || 2;
  console.log(arguments);
  return a+b;
};
console.log(add1(3)); //5
