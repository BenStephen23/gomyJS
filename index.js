// String manipulation Functions
// Function that reverses a string
function reverseString (str){
    console.log(str.split('').reverse().join(""));
}

reverseString("Tatoo")

// function that counts characters in a string

function countCharacters(str){
    console.log(str.length)
}

countCharacters("Tatoo is mine")

// function that capitalize each first letter of word in a string
function capitalizeFirst(str){
    console.log(str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
}

capitalizeFirst("tatoo is mine")

// Array functions
// find maximum number and minunum number in an array

function maxminNumber(arr){
    console.log(Math.max(...arr) , Math.min(...arr))
}

maxminNumber([1, 2, 61, 4, 5])

// sum of numbers in an arrays
function sumOfArray(arr){
    console.log(arr.reduce((acc, cur) => acc + cur, 0));
}

sumOfArray([1, 2, 61, 4, 5])

// filter odd numbers from array
function filterOdd(arr){
    console.log(arr.filter(num => num%2 !==0));
}

filterOdd([1, 2, 61, 4, 5])

// mathematical function
// factorial function
function numFactorial(n){
    //  if the input is a non-negative integer
     if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return 'Factorial is defined only for non-negative integers.';
    }

    // if n is 0, the Factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // for numbers > 0 n! = n * (n-1)!
    return n * numFactorial(n - 1);
}

console.log( numFactorial(6))

// prime number function
function isPrime(n){
     // Check if n is less than 2
     if (n < 2) {
        return false;
    }

    // Check for divisibility by numbers from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // If n is divisible by any number between 2 and the square root of n, it's not prime
            return false;
        }
    }

    // If no divisor is found, n is prime
    return true;
}

console.log(isPrime(1));

// Fibonacci sequence function
function fibonacci(limit) {
     // Initialize the Fibonacci sequence with the first two numbers
    let sequence = [0, 1];

    // Generate subsequent Fibonacci numbers until reaching the limit
    while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }

    return sequence;

}

console.log(fibonacci(7000));