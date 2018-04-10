const game={
    "suspects":[
        {
            name:"Rusty",
            color:"orange"
        },{
            name:"Miss Scarlet",
            color:"red"
        }
        ]
};
function foo(){
   for (i=0;i<game.suspects.length;i++){
       console.log(game.suspects[i]);
   }
};
foo();
//for (i=0;i<game.suspects.length;i++){
  //  console.log(game.suspects[i]);
  //};

// another method
for (let key in game){
  console.log(game[key])
}

var gameLoop=function(){
  for(var i=0;i<game.suspects.length;i++){
    //console.log("outer loop") //to know how many times outer loop is run
    for(var key in game.suspects[i]){
    //  console.log("inner loop");  //to know how many times inner loop is run
      if(game.suspects[i][key]=="Rusty"){
        console.log("found\'em!");
      }else{
        console.log("next time!");
      }
    }
  }
}
gameLoop();

//How to get only color:red and color:orange from the object
const firstColor=game.suspects[0].color;
const secondColor=game.suspects[1].color;
console.log(firstColor);
console.log(secondColor);


var [color,color2]=[game.suspects[0].color,game.suspects[1].color];
console.log([color,color2]);

var [{color:firstColor},{color:secondColor}]=game.suspects;
console.log(firstColor);
console.log(secondColor);
