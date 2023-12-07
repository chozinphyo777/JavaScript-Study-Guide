let fav_foods = "Pizza";
document.write("<h2>If Condition </h2>")
if(fav_foods == "Pizza")
document.write("<h3>Favorite Food is Pizza</h3>");
else if(fav_foods == "Hot Pot")
document.write("<h3>Favorite Food is Hot Pot</h3>");
else if ( fav_foods == "Burger")
document.write("<h3>Favorite Food is Burger</h3>");
else if ( fav_foods == "Spicy Noddle")
document.write("<h3>Favorite Food is Spicy Noddle</h3>");
else
document.write("<h3>Nothing</h3>");




document.write("<br><h2>Switch Condition </h2>")
let food = prompt("Enter Favorite Foods");
switch (food) {
    case 'Hot Pot':
        document.write("<h3>I like Hot Pot</h3>");
        break;

    case 'Pizza':
        document.write("<h3>I like Pizza</h3>");
        break;

    case 'Burger':
        document.write("<h3>I like Burger</h3>");
        break;

    case 'Spicy Noddle':
        document.write("<h3>I like Spicy Noddle</h3>");
        break;

    default: document.write("<h3>Nothing</h3>");
        break;
}





document.write("<br><h2>While Loop </h2>");
let num = 1;
while( num <= 10){
    document.write("\t<span>Number: </span> " + num);
    ++num;
};

// Do While Loop
document.write("<br><br><h2>Do While Loop </h2>");
let number = 11;
do{ 
    document.write("\t<span>Number: </span> " + number);
    --number ;
}while( number <= 10  && number > 0);


//For Loop
document.write("<br><br><b><h2>For Loop</h2></b>");
let start_count, end_count;
start_count = parseInt(prompt("Enter nuber between 0 and 5"));
while( (start_count < 0 || start_count > 5 )){
    start_count = parseInt(prompt("Enter nuber between 0 and 5"));
    
};
end_count = parseInt(prompt("Enter nuber between 6 and 10"));
while( (end_count < 6 || end_count > 10 )){
    end_count = parseInt(prompt("Enter nuber between 6 and 10"));
    
};
for (let count = start_count; count < end_count; count++) {
    document.write("<p>I love Javascript " + count + "</p> ");
}



// loop array using for loop
let fruits = ["mango","banana","strawberry","apple","watermelon"];
document.write("<h3>Fruit list:</h3>")
for (let number = 0; number < fruits.length; number++) {
    document.write(number + 1 + ". "+fruits[number] + "<br>");
    
}




