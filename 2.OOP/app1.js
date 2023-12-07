var greet = "Hello"; // string
var greet1 = new String("Hello"); //object
console.log(typeof greet);
console.log(typeof greet1);
console.log(greet1[0]);

// Literal Object
let book = {
    'title' : "Myanmar",
    'price' : "1000",
    getFunction: function(){
        return `The book title is ${this.title}`;
    },
};

book.title = "History";
console.log(book);
console.log(book.getFunction());

// constructor
function detail(title = "Bio Boook",price = "2000"){
    this.title = title;
    this.price = price;
    this.getTitle = () => { return `The Title is ${this.title}`};

}

var book1 = new detail("English Book","20000"); //create obj
var book2= new detail();
var car = new detail ("BMW", "$10000");
console.log(book1);
console.log(book1.getTitle());
console.log(book2);
console.log(book2.getTitle());
console.log(car);
console.log(car.getTitle());

