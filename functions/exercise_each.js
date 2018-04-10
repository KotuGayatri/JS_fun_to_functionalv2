const _={};n
var list=["vinisha","shilpa","sowmya"];
_.each=function(list,callback){
  if(Array.isArray(list)){
    //loop through array
    for (var i=0;i<list.length;i++){
      //callback function
      callback(list[i],i,list);
    }
  }else{
    //loop through object
    for(var key in list){
      callback(list[key],key,list)
    }
  }
}

_.each(["vinisha","shilpa","sowmya"],function(name,i){
  if(list[i+1]){
  console.log(name," is younger than ",list[i+1]);
}
else{
  console.log(name," is the oldest")
}
})
