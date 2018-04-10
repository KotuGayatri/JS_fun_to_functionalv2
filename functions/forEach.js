function CreateSuspectObjects(name){
    return{
        name:name,
        color:name.split(" ")[1],
        speak(){
            console.log("my name is ",name);
        }
    }
};

var suspects=["Miss Scarlet","colonel Mustard","Mr White"];
var suspectsList=[];
console.log(CreateSuspectObjects("Miss Scarlet"));

for(var i=0;i<suspects.length;i++){
 suspectsList.push(CreateSuspectObjects(suspects[i]));
};
console.log(suspectsList);
var _=require("underscore")

_.each(suspects,function(name){
  suspectsList.push(CreateSuspectObjects(name))
}
);

console.log(suspectsList);

var rooms=["observatory","ballroom","library"];

var logger=function(val){
    console.log(val);
  };
  _.each(rooms,logger);
