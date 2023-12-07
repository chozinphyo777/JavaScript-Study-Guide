//No argument function
console.log("No argument function");
function testing(){
    console.log('   Hello I\'m testing Function');
}
testing();

//Multi argument with default value
console.log("Multi argument with default value")
function adding(num1=1 , num2=2){
    console.log("  "+ (num1 + num2));
}
adding();
adding( 10,20);

//Type Function vs Void Function
console.log("Type Function vs Void Function");
function voidFunction(num1=1  , num2=2){
    console.log("   As this is Void Function, No include return => "+ (num1 * num2));
}
voidFunction();
voidFunction(20,2);

function typeFunction(num1=1  , num2=2){
    return num1 * num2;
}
let result = typeFunction();
console.log("   As this is Type Function, It includes return => "+ result);

//Short Form array
console.log("Short Form array");
let multi = function (num1 , num2){
    console.log("   Mutiply Result " + num1*num2 )
}
multi(3,4);

let sub = (num1,num2) => {
    console.log("   Subtract Result " + (num1 - num2) )
}
sub(4,2);

let add = (num1,num2) => console.log("   Adding Result " + (num1 - num2) );
let hi = () => console.log("he he hr hr");

add(4,2);
hi();




