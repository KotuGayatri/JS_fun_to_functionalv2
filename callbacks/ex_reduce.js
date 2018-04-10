var _=require("underscore");
_.reduce([1,2],function(sum,n){
  return console.log(sum +n);
},0);

//_.reduce({"a":1,"b":2,"c":1},function(result,value,key){
//  (result[value]||(result[value]=[])).push(key);
//  return console.log(result);
//},{});
//=>{"1":["a","c"],"2":["b"]}(iteration order is not guaranteed)

//Exercise:
var _={};
const reduce=function(list,cb,initial){
  //loop through list
  let memo=initial;
  for(let i=0;i<list.length;i++){
    if(i===0 && memo===undefined){
      memo=list[0]
    }else{
      memo=cb(list[i],memo)
    }
  }
     //call the cb with arr[i],prev/initial
     //save the return value
  //return result
  return console.log(memo);
}
reduce([1,2,3],(v,sum)=>v+sum,0)
