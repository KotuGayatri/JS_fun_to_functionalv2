const weapons=["candlestick","lead pipe","revolver"];

var makeBroken=function(item){

  return console.log("broken "+ item);
}

var _=require("underscore")

for(var i=0;i<weapons.length;i++){
_.map(weapons,makeBroken(weapons[i]));
};
//another way to do it.
_.map(weapons,function(item){
  return makeBroken(item)
});


//another example:

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

var suspectsList=_.map(suspects,function(name){
  return CreateSuspectObjects(name);
});

console.log(suspectsList);
