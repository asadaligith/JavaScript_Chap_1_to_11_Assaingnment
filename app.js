// <-------------Question NO, 1 Exercises Start------------>

// Excercise 1.
alert("Hello, World")

// Excercise 2.
alert("My Name is Asad Ali")

// Excercise 3.
alert(5)

// Excercise 4.
var message = "Practice make Perfect";
alert(message)
 
// Excercise 5.
var names = "Asad Ali";
var greet = "Hello " + names ;
alert(greet)

// <--------------Question No, 1 End----------------->

// <-----------Question NO, 2 ----------------------->

// Excersices Veriable for String : Declaring and using Text Data Start

// Execercise NO, 01
var userName = "Asad Ali";
console.log(userName)

// Ex NO, 02 : Store a welcome message in a Veriable and alert it

var message = "Welcome Asad Ali";
alert(message)

// Ex NO, 03 Combine first name and last name into one veriable

let first_name = "Asad";
let last_name = "Ali" ;
let full_name = first_name + " " + last_name ;
console.log(full_name)

// Ex No, 04 Store your favorite quote in a variable.

let quote = "code ko readable aur understandable banao, sirf machine ke liye nahi dusre developers ke liye bhi.";
console.log(quote)

// Ex NO, 05  Create a variable city and show <Welcome to [city]!= in an alert

let city = "Karachi";
alert(`welcome to ${city}`)

// <----------------Question 02 Excercises End--------------->

// <----------------Question NO, 03 Excercises Start----------->
//  Variables for Numbers: Storing and Using Numerical Data

// Ex No, 01  Declare a variable age and assign your age to it.
let age = 27;

// Ex NO, 02 Store two numbers in variables and add them.
let first_nbr = 8;
let second_nbr = 5;
console.log(first_nbr + second_nbr)

// Ex NO,03 Subtract one number from another.
console.log(first_nbr - second_nbr)

// Ex NO, 04 Multiply two numbers stored in variables.
console.log(first_nbr * second_nbr)

// Ex NO, 05 Show a message like: <You are 20 years old.
console.log(`you are ${20} years old`)

//<-----------Question NO, 03 End ---------------------->

//<.............Question NO, 04 Start...................>

// 4.Math Expressions: Performing Arithmetic Operations

// Ex, NO, 01  Create two variables: x = 10, y = 5  add them and show result
let x = 10;
let y = 5;
let add = x + y;
console.log(add)

// Ex, 02 Subtract y from x and alert the answer
let subtract = y - x;
console.log(subtract)
 
//Ex 03 Multiply x and y, and log result to the console.
let multiply = x * y
console.log(multiply)
//Ex 04 Divide x by y
let divide = x / y
console.log(divide)

// Ex 05  Find the remainder of x % y.

let remainder = x % y;
console.log(remainder)

// <.....................Question 04 End.................>

// <--------------------Question 05 Start --------------->

// 5.Prompt: Getting Input from the User

// Ex NO, 01 Ask the users name and greet them.
let user_names = prompt("Enter Your Name");
alert("Hello " + user_names)

// Ex No, 02 Ask the users age and display it.
let user_age = prompt("Enter Your age");
alert("You are " + user_age + "years Old")

// Ex No, 03 Ask the user for a number, double it, and show the result

let user_number = prompt("Enter a Number");
let double = user_number * 2;
alert(`your number is ${user_number} and double is ${double}`)

// Ex NO, 04 Ask for favorite colour and show a message like: 
let fvt_color = prompt("What is your Favorite color");
alert(`Wow! I Like ${fvt_color} too!`)

// Ex NO, 05  Ask for city name, and say: <You are from [city].
let city_name = prompt("What is Your City Name");
alert(`you are from ${city_name}`)

//<........................Question 05 End ..............>

// <********************Question 06 Start*****************>
//6.If Statement and Comparison Operators: Controlling Flow

// Ex No,01  Ask user age. If age < 30, show <You are still young man.

let users_ages = Number(prompt("What is your age"));

if (users_ages < 30){
    alert("You are still Young man")
} else{
    alert("You are not a young man ")
}

// Ex NO, 02  Ask for a number. If its even, show <Even number.

let even_number = Number(prompt("Enter a Number"));
if (even_number % 2 === 0){
    alert(`its a ${even_number} Even Number`)
} else{
    alert(`its ${even_number} not even Number`)
}

// Ex No, 03 Compare two numbers and show which one is greater

let Num_one = Number(prompt("Enter first Number to compare "));
let Num_two = Number(prompt("Enter second Number"));

if (Num_one > Num_two){
    alert(`${Num_one} is Greater the ${Num_two}`)
} else if (Num_two > Num_one){
    alert(`${Num_two} is Greater the ${Num_one}`)
} else {
    alert("Both Number is Equal")
}

// Ex NO,04 Ask the user for password. If correct, say <Access granted
let password = 12345;
let user_password = Number(prompt("Enter a Password: ", "Like this 12345"));
if (user_password === password){
    alert("Access Granted")
} else{
    alert("Access Denaied")
}

// Ex NO, 05: Use ==, ===, !=, !== to compare two values

let value1 = "5";     // string
let value2 = 5;       // number

// Loose equality (==): compares value after type conversion
console.log(value1 == value2);   // true

// Strict equality (===): compares value and type
console.log(value1 === value2);  // false

// Loose inequality (!=): compares value after type conversion
console.log(value1 != value2);   // false

// Strict inequality (!==): compares value and type
console.log(value1 !== value2);  // true

//*****************************            Completed          **************************************88 */
