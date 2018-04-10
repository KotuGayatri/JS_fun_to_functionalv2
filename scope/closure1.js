//Closure recipe
function checkscope(){
  var innervar="local scope";
  function innerFunc(){
    return console.log(innerVar);
  };
  return console.log(innerFunc);
};

var test =  checkscope();
test;

const findSomeone = () =>{
  const speak = () => {
    console.log(who);
  };
  let who = "Why hello there, Prof Plum";
  return speak;
};

const someoneSpeak = findSomeone();
console.log(someoneSpeak);
console.log(someoneSpeak());


const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = () => {
    return elapsed;
  };
  const increase = () => elapsed++;
  setInterval(increase,1000);
  return stopwatch;
};
let timer = makeTimer();
console.log(timer);
console.log(timer());
timer();
