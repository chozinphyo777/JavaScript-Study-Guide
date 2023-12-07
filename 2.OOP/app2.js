// constructor
function detail(title ,author, year ,price){
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
    //this.getDetail = () => { return `Book title is ${this.title} written by ${this.author} in ${this.year}`};

    
}

//prototype
detail.prototype.getDetail = function () {
     return `Book title is ${this.title} written by ${this.author} in ${this.year}`;
    };

detail.prototype.getAge = function (){
    return new Date().getFullYear() - this.year;
}

var book = new detail("MM","Mr.J",2011,"$1000");
console.log(book);
console.log(book.price);
console.log(book.getDetail());
console.log("Years",book.getAge());