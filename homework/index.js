/*
Homework
1. Numeric Operations:
Declare two variables, num1 and num2, and assign them numeric values. Display their sum using alert().

2.String Concatenation:
Create two variables, firstName and lastName, and assign them string values. Display a greeting message using alert() that includes both names.

3. Boolean Logic:
Use confirm() to ask the user if they are an adult. Store the result in a variable and display it using alert().

4. Prompt and Data Types:
Use prompt() to ask the user for their favorite number. Store the input in a variable and display its type using alert().

5. Objects
Create an object with will have the following keys (username, firstName, lastName, age, email) also it should contain a key named address which should be an object and should have keys city, street, home.
Then display the following text by passing the correct values from object (use both . and [] notations): "Hi I'm *firstName* *lastName*, I'm *age* years old. You can contact with me via *email* or via *username*. I live in *city* *street* *home*. Please contact me back!" 
*/

//Task1
let num1 = 15;
let num2 = 8;
alert(num1 + num2);

//Task2
let firstName = 'Arthur';
let lastName = 'Pendragon';
alert(`Hello, ${firstName} ${lastName}!`);

//Task3
const confirmation = confirm('Are you an adult?');
if (confirmation == true) {
    alert('The user is adult');
} else {
alert('You shall not pass');
}
//Task4
const input = prompt('What is your favorite number?');
alert(typeof(input));

//Task5
let person = {
    firstName  :'Morgan',
    lastName : 'La Fay',
    age : '37',
    email : 'MorganLaFay@gmail.com',
    "user name" : 'morgana_from_abalon',
    address : {
        city : 'Camelot',
        street : 'Avalon st.',
        home : '8',
    },
}
console.log(`Hi I'm ${person.firstName} ${person.lastName}, I'm ${person.age} years old. You can contact with me via ${person.email} or via ${person["user name"]}. I live in ${person.address.city}, ${person.address.street}, ${person.address.home}. Please contact me back!`);
