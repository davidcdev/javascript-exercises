/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// Solution with if and else 

for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} 

// For the solution with Switch to work the argument on switch has to be boolean true, so it can compare each case against it and give the expected output, before I had put i as the argument so it was just going to the default without considering the cases.

for (let i = 1; i <= 100; i++) {
    switch (true) {
        case i % 5 == 0 && i % 3 == 0:
            console.log("FizzBuzz");
            break;
        case i % 3 == 0:
            console.log("Fizz");
            break;
        case i % 5 == 0 && i % 3 != 0:
            console.log("Buzz");
            break;
        default: 
        console.log(i);
    }
}