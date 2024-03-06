/*
1. Write a function called calculateArea that calculates the area of a rectangle. It should take two parameters: width and height and return the calculated area.

2. Write a function expression named isEven that checks if a given number is even. Test the function with various numbers.

3. Create an arrow function named cube that calculates the cube of a given number. Test the function with different values.

4. Write a function named greetUser that takes a name and a greeting (with a default value of "Hello") as parameters and logs a personalized greeting. Test the function with different scenarios.

5. Given the following product information:
let product = {
    name: 'Smartphone',
    price: 500,
    discount: 10,
    stock: 50
};

Your task is to create a function named calculateRevenue that performs the following:

1. Calculate the discounted price after applying the discount to the original price.
2. For each of the next 5 years, calculate and store the revenue generated from selling the product, considering the current stock, discounted price, and the number of years.

Here is a sample structure for the calculateRevenue function:

function calculateRevenue(product) {
    // Your code here

    return results;
}

The results object should have properties representing each year, with a message describing the revenue for that year. The message should include the year number, product name, discounted price, and calculated revenue.
 */


//Task 1
const calculateArea = (a, b) => a * b;

console.log(calculateArea(5, 8));

//Task 2
function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number`);
    } else {
        console.log(`${num} is an odd number`);
    }
}

isEven(94752792);
isEven(3);
//Task 3
const cube = (a) => a ** 3;

console.log(cube(3));
console.log(cube(15));
console.log(cube(-5));//can cube be neative?

//Task 4
const greetUser = (name) => {
    console.log(`Hello ${name}`);
};

greetUser('user331');
greetUser('иванушка');
greetUser('');
greetUser(' ');

//Task 5
let product = {
    name: 'Smartphone',
    price: 500,
    discount: 10,
    stock: 50
};

function calculateRevenue(product) {
    let results = {};
    let year = 2024;
    let discount = product.price * 0.1;

    for(let i = 1; i <= 5; i++) {

        results[i] = `This is the ${product.name} revenue for ${year} which earned us ${product.price - discount} for each and made up general amount of ${product.stock * (product.price - discount)}.`;
        year++;
    }
    return results;
}

console.log(calculateRevenue(product));





