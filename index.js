/*	
Homework for lesson 5
1. Write a program that checks whether a given year is a leap year. Use nested if-else statements to handle the conditions. A leap year is divisible by 4, except for years that are divisible by 100, unless they are also divisible by 400.

2. Develop a program that takes three numbers as input and uses nested ternary operators to find and print the largest number among them.

3. Write a program using a while loop to simulate the Fibonacci sequence. Generate the first 10 numbers in the sequence and print them.

4. Implement a for loop that iterates over numbers from 1 to 100. Print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for numbers that are multiples of both 3 and 5. Otherwise, print the number.

5. Implement a program that checks whether a given string is a palindrome (reads the same backward as forward) using conditional statements. Ignore spaces and case sensitivity.
*/

//Task1
function isaLeapYear(i) {
    if (i >= - 45 && i <= - 9 && i % 3 === 0) {
        console.log(`the ${i} year is a leap year`)
    } else if (i > 0 && i % 4 === 0 && i % 100 !== 0) {
        console.log(`the ${i} year is a leap year`)
    } else if (i > 0 && i % 4 === 0 && i % 400 === 0) {
        console.log(`the ${i} year is a leap year`)
    } else {
        console.log(`the ${i} year is a happy(normal) year`)
    }
}
//45 year bc was the first leap year in history, and according to wiki before 0 year they were debagging the system, that's why i have first if 

isaLeapYear(-888)
isaLeapYear(-33);
isaLeapYear(-7);
isaLeapYear(888);
isaLeapYear(1369);
isaLeapYear(1100);
isaLeapYear(2000);


//Task2
function largestNum(a, b, c) {
    a > b && a > c ? console.log(a) : 
    b > c ? console.log(b) :
    console.log(c);
}

largestNum(3, 6, 9); 
largestNum(9, 6, 3);
largestNum(3, 9, 6);

//Task3
function fibonacciWhile(a) {
    let i = 1;
    let b = a + a;

    while(i <= 5) {
        console.log(a);
        a = a + b;
        console.log(b);
        b = b + a;
        i++;
    }
}

fibonacciWhile(5);
fibonacciWhile(-8);

//Task4
function fizzBuzz() {
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}
}

fizzBuzz();

//Task5
//doesn't work at all and i dont understand why, so whole func is a one big question
function isaPalindrome(text) {
    let i = text.at(0).toLowerCase();
    let j = text.at(-1).toLowerCase();
   // console.log('test ', i <= text.length);
    for ( ; i.length <= text.length && j.length <= - text.length; ) {
        if(i === j && i !== ' ' && j !== ' ') {
            i++;
            j--;
        } else if (i !== j && i === ' ') {
            i++;
        } else if (i !== j && j === ' ') {
            j--;
        } else if (i !== j && i !== ' ' && j !== ' ') {
            console.log('thanks for a boring case');
        } console.log('congrats, you found a palindrome!');
    }
}

isaPalindrome('шалаш');
isaPalindrome('а Роза упала на лапу Азора');
isaPalindrome("huoston we have a problem's");
