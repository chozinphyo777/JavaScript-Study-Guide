//Output Way
console.log("Hello External JavaScript");
document.write("<h6>Hello World!</h6>");
// alert("Hi, there");
// confirm('Are you Sure?');
// prompt('Type DELETE');


// Variabele Declaration => var,let,const
const name = "Mg Mg"; // sting
var age = 26; // number
var is_female = true; // boolean 
let sport = ['football','badminton','swimming']; //array
var about_me = {
     name : 'mg mg',
     role : 'developer',
}; // Object

const daily_activity = function(){
    console.log('My activity => Working office job from my home');
}
console.log(name);
console.log(age);
console.log(is_female);
console.log("My Favorite Sports are "+ sport);
console.log ("Name => " + about_me['name']+ ", Role => "+about_me['role']);
daily_activity();

//Arithmetic Operators
console.log("\nArithmetic Operators => + - * % ++ --");
let a,b;
a= 20; b=10;
console.log(" a = 20 ,b = 10");
console.log(" a + b = "+ (a + b));
console.log(" a - b = "+ (a - b));
console.log(" a * b = "+ (a * b));
console.log(" a / b = "+ (a / b));
console.log(" a % b = "+ (a % b));

console.log("\n a = 20 ,b = 10");
console.log(" ++a => "+ (++a) + '/ a => ' + a);
console.log(" --a => "+ (--a) + '/ a => ' + a);
console.log(" b-- => "+ (b--) + '/ b => ' + b);
console.log(" ++b => "+ (++b) + '/ b => ' + b);
console.log(" b-- => "+ (b--) + '/ b => ' + b);
console.log(" --b => "+ (--b) + '/ b => ' + b);
console.log(" b++ => "+ (b++) + '/ b => ' + b);


// Comparison Operators
console.log("\n\n Comparison Operators => ==  !=  < >  <=  >= ");
a = 5; b= 10;
console.log(" a = 5 ,b = 10"); 
console.log(" a == b => "+ (a == b)); // false
console.log(" a != b => "+ (a != b)); // true
console.log(" a < b => "+ (a < b)); // true
console.log(" a > b => "+ (a > b)); // false
console.log(" a <= b => "+ (a <= b)); //true
console.log(" a >= b => "+ (a >= b)); //false

a = 20 ; b = "20";
console.log("\n \n a = 5 ,b = 10"); 
console.log(" a == b => "+ (a == b)); //true
console.log(" a === b => "+ (a === b)); //false
console.log(" a != b => "+ (a != b)); //false
console.log(" a !== b => "+ (a !== b)); //true


//Logical Operators
console.log("\n\n Logical Operators => ==  && || ! ");
a = 22; b= 33; c= 44 , d = 22
console.log(" a = "+ a + " b = " + b + " c = "+ c + " d = "+d); 
console.log(" (a == b) && ( a == c) => " + ((a == b) && ( a == c)) );
console.log(" (a != b) && ( a != c) => " + ((a != b) && ( a != c)) );
console.log(" (a != b) && ( a == c) => " + ((a != b) && ( a == c)) );
console.log(" (a != b) || ( a == c) => " + ((a != b) || ( a == c)) );
console.log(" (a == b) || ( a == d) => " + ((a == b) || ( a == d)) ); 
console.log(" (a != d) || ( b == c) => " + ((a != d) || ( b == c)) ); 
console.log(" !(a != d)  => " + (!(a != d)) ); 
console.log(" !(a == d)  => " + (!(a == d) ) ); 


//Assignment Operators
console.log("\n\n Assignment Operators => = += -= *= /= %= ");
a= 30; b=20;
console.log(" a = "+ a + " b = " + b ); 
console.log(" (a = b ) => a = " + (a = b ));
console.log(" (a += b ) => a = " + (a += b ));
console.log(" (a -= b ) => a = " + (a -= b ));
console.log(" (a *= b ) => a = " + (a *= b ));
console.log(" (a /= b ) => a = " + (a /= b ));
console.log(" (a %= b ) => a = " + (a %= b ));

//Miscellaneous Operator (conditional operator (or ternary) (? : ) )
console.log("\n\n Conditional operator (or Ternary => ? : ");
let result = ( a == b ? " Same" : " Not Same");
console.log(" a == b ? ' Same' : ' Not Same' =>" +result);

// Miscellaneous Operator ( typeof operator => check data type )
console.log("\n\nTypeof operator => typeof ");
console.log ("typeof 10 => "+ typeof 10);
console.log("typeof(10) => "+typeof(10));  //number
console.log("typeof 9.99 => "+typeof 9.99);  //number
console.log("typeof 'Hla Hal' => "+typeof "Hla Hal"); // string
console.log("typeof true => " +typeof true); //boolean



















