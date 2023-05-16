/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// SOLUTION WITH IFs & ELSE IFs
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

// SOLUTION WITH SWITCH
for (let i = 1; i <= 100; i++) {
    switch (i) {
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
// SWITCH SEEMS EASIER TO READ