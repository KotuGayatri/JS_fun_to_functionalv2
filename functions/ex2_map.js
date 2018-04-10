const _={};
_.map =function(list,callback){
  //create an empty array to store
  var storage=[];
  //loopin
  for(var i=0;i<list.length;i++){
    storage.push(callback(list[i],i,list));
  }
  //callback each element
  //push it to our array
  //return []
  return storage;
}

_.map([1,2,3],function(val){return console.log(val+1);}); //=>[2,3,4]
