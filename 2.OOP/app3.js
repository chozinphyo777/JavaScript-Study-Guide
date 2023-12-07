// constructor
function magazine(title ,author, year ,price){
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
    //this.getDetail = () => { return `Book title is ${this.title} written by ${this.author} in ${this.year}`}; 
}

//prototype
magazine.prototype.getDetail = function () {
     return `Book title is ${this.title} written by ${this.author} in ${this.year}, ${ this.month ? this.month : ''}`;
    };

magazine.prototype.getAge = function (){
    return new Date().getFullYear() - this.year;
}

//constructor
function news(title ,author, year ,price, month){
magazine.call(this,title,author,year,price); // inheretence (constructor call)
this.month = month;
}

var maga = new magazine("English","Mr.Hog",2000,"$800");
console.log("This is for magazine")
console.log(maga);
console.log(maga.price);
console.log(maga.getDetail());
console.log("Years",maga.getAge());

console.log("\n\nThis is for News")
news.prototype = Object.create(magazine.prototype) // to use magazine's all prototype
var news = new news("Myanmar","Mr.King",2001,"$76","December");
console.log(news);
console.log(news.getDetail());
console.log("Years",news.getAge());



//dfjds
const car = {
    type: "Toyota",
    price: "$2000",
    getDetail: function(){
        return `Car Type ${this.type}, Car Price ${this.price}`;
    },
};

var book = Object.create(car);
book.type = "story";
book.price= "2000";
book.getDetail = function (){
    return `Book Type ${this.type}, Book Price ${this.price}`;
}

var clothes = Object.create(car,{
    type:{value:"T Shirt"},
    year:{value:"4000"},
    getDetail:{value: function(){
        return `Clothe Type ${this.type}, Clothe Price ${this.price}`;
    }},
});
console.log(car);
console.log(car.getDetail());
console.log(book);
console.log(book.getDetail());
console.log(clothes);
console.log(clothes.getDetail());

