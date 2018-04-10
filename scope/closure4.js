function countClues() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { return n = 0; }
  };
};
console.log(counter=countClues());
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
console.log(counter.reset());
console.log(counter.count());
console.log(counter.count());
