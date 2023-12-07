// Object likes  associative array
var car = new Object();
car.name = "BMW";
car.price = "$1000";

console.log("Car ", car);
console.log("Car Price ", car.price);

function book(btitle,bprice){
    this.title = btitle;
    this.pirce = bprice;
}
var result = new book("ABC","$100");
console.log("Book ", result);

// var book = new Object();
// book.title = "ABC";
// book.price = "$100";

let num = 10.4346;
console.log(num.toFixed(3));

let name = "Hello World";
console.log(name[2]);//l
console.log(name.toUpperCase());//HELLO WORLD

//substr() method extracts a part of a string.
//substr(start position, no of character)
console.log("Substr => ",name.substr(0,4));//Hell
console.log("Substr => ",name.substr(6,3));//Wor

//substring() method extracts a part of a string.
//substring(start position, end position)
console.log("\nSubstring => ",name.substring(1, 4));// ell
console.log("Substring => ",name.substring(2, 4));//ll
console.log("Substring => ",name.substring(6, 9));//Wor
console.log("Substring => ",name.substring(2));//lo World


//The slice() method extracts a part of a string.
//slice(start must be 0 , no of character )
console.log("\nSlice => ", name.slice(0,4)); // Hell
console.log("Slice => ", name.slice(0,5));//Hello
console.log("Slice => ", name.slice(3));

let text = "       Hello World!        ";
let text_result = text.trim();
console.log(text_result);//Hello World!

// split() method splits a string into an array of substrings.
let split_text = "How are you doing today?";
const myArray = split_text.split(" ", 4);
console.log(myArray);
console.log(myArray[2]);
let date = "2/3/2022";
[day,month,year]=date.split("/");
console.log(day);
console.log(month);
console.log(year);
$r = date.split("/");
console.log("Day => "+$r[0]);
console.log("Month => "+$r[1]);
console.log("Year => "+$r[2]);


