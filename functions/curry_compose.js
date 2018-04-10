var _ = require("underscore");
const curry =  (fun) => {//abc
  return (arg) => { //1
    return (arg2) => {//2
    }
  }
}

//example
var abc = function(a,b)
{
  return[a,b];
};
var curried =_.curry(abc);
curried(1)(2)
// =>[1,2]

//compose

const compose = (fun1,fun2) => {
  return (arg) => {
    const result= fun2(arg);
    return fun1(result);
  };
};
