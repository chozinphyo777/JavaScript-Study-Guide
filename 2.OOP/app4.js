class Animal{
    constructor(name,age,color)
    {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    eat(){
        console.log(`This ${this.name} eats bones of cattle`);
    }
    static speak(){
        console.log(`This ${this.name} makes a noise.`);
    }
}

const obj = new Animal("Go Go","1","white");
console.log(obj);
obj.eat();
Animal.speak();

class Dog extends Animal{
    constructor(name,age,color,gender)
    {
        super(name,age,color);
        this.gender = gender;
    }

    activity(){
        console.log(`This ${this.name} always care our house`)
    }
   
}
const obj2 = new Dog("Black","2","black","female")
console.log(obj2);
obj2.activity();
obj2.eat();
Dog.speak();

const obj3 = new Dog("Phway","3","white","male")
console.log(obj3);