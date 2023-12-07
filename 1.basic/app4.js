//Simple Array ( index array)
let arr1 = new Array(1,2,3);
console.log(arr1);

let arr2 = ['10','20','30'];
console.log(arr2[0]);

//Associated Array (An associative array is also an object)
let arr3 = {
    'id' : 1, 
    'name' : 'Cho',
    'age' : '25',
     greeting(){ console.log("How old ary you?  " + this.name)},
     reply(){ console.log(`I am ${this.age}`)}
    };
console.log("id => " + arr3['id']);
console.log("name => " + arr3.name);
console.log(arr3.greeting());
console.log(arr3.reply());

let arr4 = [];
arr4['id'] = 2;
arr4['name'] = 'Zin';
console.log("id => ", arr4.id);
console.log("name => " + arr4.name);

let strange_array = [10,20,30];
[a,b,c,d] = strange_array;
console.log("Strange Arr => "+ a+ "," +b +","+c);

// Array Methods
console.log("Array Methods");
arr5 = [ 3 , 4 ];
console.log(arr5);
//Adds one or more elements to the end of an arra
arr5.push(5,6);
console.log(arr5);
var new_arr_1 = [...arr5, 7];
console.log(new_arr_1 );
//Adds one or more elements to the front of an array
arr5.unshift(1,2);
console.log(arr5);
//Removes the last element from an array
arr5.pop();
console.log(arr5);
//Removes the first element from an array
arr5.shift();
console.log(arr5);
//Joins all elements of an array into a string.
console.log(arr5.join('/'));

//Map Method
console.log("Map Method")
var arr = [20, 50, 60, 30, 80, 90];
var newArr1 = arr.map(function(val){
    return val+(val*0.1) ;
});
console.log(newArr1);

var newArr2 = arr.map( num => num * 10);
console.log(newArr2);


var roots = arr.map(Math.sqrt);
console.log("roots   : " + roots ); 

//Filter
console.log("Filter");
let nums = [ 1, 2, 3, 4 ];
let result = nums.filter(function(n) {
return (n % 2) == 0;
});
console.log(result) // => [ 2, 4]

let result1 = nums.filter((n) =>{
    return n % 2;
} 
)
console.log(result1) // => [ 1, 3 ]

let users = [
    { name: 'Bob', gender: 'male' },
    { name: 'Alice', gender: 'femail' },
    { name: 'Tom', gender: 'male' }
    ];
    let result3 = users.filter(function(user) {
    return user.gender == 'male';
    });
   console.log( result3);
    // { name: 'Bob', gender: 'male' },
    // { name: 'Tome', gender: 'male' }


//Reduce
console.log("Reduce");
arr7 = [3,4,5];
let last_result = arr7.reduce(function(a,n){
    return a + n;
});
console.log(last_result);
let last_result2 = arr7.reduce ((a,n) =>  a + n);
;
console.log(last_result2);

//Array argument pass
console.log("Array argument pass");
function new_fun([a,b]){
    console.log(a);
    console.log(b);
}
new_fun([10,20]);