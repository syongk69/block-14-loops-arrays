// start with input integer variable that will go from 1 to 100
// use if/else-if/else statements to check multiples of 3, 5, and 3 and 5
// output "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5

// enter integer variable for 100 (for 1 to 100 count)
const num = 100;

// FOR loop to check each variable for multiples of 3, 5, and 3 and 5
for (let i = 1; i <= num; i++) {
  // IF statement to check integer variable is multiple of 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    // output "FizzBuzz" for multiples of 3 and 5
    console.log(`FizzBuzz`);
    // ELSE-IF statement to check integer variable is multiple of 3
  } else if (i % 3 === 0) {
    // output "Fizz" for multiples of 3
    console.log(`Fizz`);
    // IF statement to check integer variable is multiple of 5
  } else if (i % 5 === 0) {
    // output "Buzz" for multiples of 5
    console.log(`Buzz`);
    // ELSE statement to console.log output integer value if it is not multiple of 3, 5 or 3 and 5
  } else {
    console.log(i);
  }
}
