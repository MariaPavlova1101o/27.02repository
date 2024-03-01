/*
Homework 1: Number Manipulation

Create a function called calculateAreaOfCircle that takes the radius of a circle as a parameter and calculates and returns the area of the circle. Use the formula: 
Area=π×radius^2


Homework 2: String Manipulation

Create a function called formatGreeting that takes a name as a parameter and returns a formatted greeting. The function should:

Replace the placeholder name "John" in the greeting "Hello I'm John, nice to meet you" with the provided name.
Remove any extra spaces from the beginning and end of the formatted greeting.
Repeat the formatted greeting twice.


Homework 3: Math Challenge

Create a function called calculateHypotenuse that takes the lengths of the two sides of a right-angled triangle as parameters (a and b) and calculates and returns the length of the hypotenuse using the Pythagorean theorem: 

a^2 + b^2 = c^2
 
​Homework 4: Advanced String Manipulation

Create a function called reverseWords that takes a sentence as a parameter and returns a new sentence where the order of words is reversed. For example, "Hello World" should become "World Hello". 
*/

//task 1
function calculateAreaOfCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(calculateAreaOfCircle(5));

//task 2
function formatGreeting(name) {
    return `Hello I'm ${name.trim()}, nice to meet you `.repeat(2);
}

console.log(formatGreeting('    Merlin        '));

//task 3
function calculateHypotenuse(a, b){
    return Math.pow(a, 2) + Math.pow(b, 2);
}

console.log(`The hypotenuse of a triangle is ${calculateHypotenuse(11, 5)}`);

//task 4
/*function reverseWords(str, i) {
    return `${str.substring(i)} ${str.slice(0, i)}`;
}*/

function reverseWords(str) {
    let firstPart;
    let lastPart;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            firstPart = str.substring(i); 
            lastPart = str.slice(0, i);
        }
    } return firstPart + ' ' + lastPart;
} 

console.log(reverseWords('Hello sweet World'));