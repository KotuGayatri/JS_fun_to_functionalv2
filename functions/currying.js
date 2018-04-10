var abc=function(a,b,c){
  return console.log([a,b,c]);
};
var _=require("underscore");
var curried=_.curry(abc);
curried(1)(2)(3);
curried(1,2)(3);
