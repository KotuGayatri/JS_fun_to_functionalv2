var person={};
person.name="Mrs. White";
var who=person.name;
console.log(who);
person.name="Mr. White";
console.log(who);

//Brackets;
var person=[];
person.name="Mrs. White";
var who=person.name;
person[0]="I was not in the Billiards room";
var plea="wouldshe";
person[plea]="I would never!";
console.log(person["plea"]);
