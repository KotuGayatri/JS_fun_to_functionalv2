//array-like suspectObject
const constructArr=function(){
    const arr=Array.prototype.slice.call(arguments);
  //  ["was","it","in"]
    arr.push("the billiards room?");
    return console.log(arr.join(" "));
    //"was it in the billiards.room?"

};
constructArr("was","it","in");


//array.from
const constructArr2=function(){
    const arr2=Array.from(arguments);
  arr2.push("the billiards room?");
    return arr2.join(" ");
};
constructArr2("was","it","in");

//_.from() exercise:
const from=arr => {
  return Array.prototype.slice.call(arr)
}

const add =function(a,b){
  return console.log(a+b);
};
add.example="testing 1234";
