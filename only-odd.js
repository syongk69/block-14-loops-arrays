// input integer arrays as constant number variables (num1, num2, num3, num4)
// use FOR loops to check each integer values in arrays for odd numbers
// output using console.log all the odd numbers in arrays

// Enter integer values in an array (num1)
const num1 = [2, 4, 6, 8, 11, 20, 15, 22];
// Enter integer values in an array (num2)
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Enter integer values in an array (num3)
const num3 = [70, 42, 55, 81, 21, 91, 34];
// Enter integer values in an array (num4)
const num4 = [2, 4, 6, 8, 10, 11, 12];

// FOR loop to increment each integer in an array for constant variable num1
for (let i = 0; i < num1.length; i++) {
  // IF statement to check each integer is odd number
  if (num1[i] % 2 !== 0) {
    // output odd number using console.log
    console.log(num1[i]);
  }
}

// FOR loop to increment each integer in an array for constant variable num2
for (let j = 0; j < num2.length; j++) {
  // IF statement to check each integer is odd number
  if (num2[j] % 2 !== 0) {
    // output odd number using console.log
    console.log(num2[j]);
  }
}

// FOR loop to increment each integer in an array for constant variable num3
for (let k = 0; k < num3.length; k++) {
  // IF statement to check each integer is odd number
  if (num3[k] % 2 !== 0) {
    // output odd number using console.log
    console.log(num3[k]);
  }
}

// FOR loop to increment each integer in an array for constant variable num4
for (let l = 0; l < num4.length; l++) {
  // IF statement to check each integer is odd number
  if (num4[l] % 2 !== 0) {
    // output odd number using console.log
    console.log(num4[l]);
  }
}
