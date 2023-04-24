// input integer arrays as constant number variables (num1, num2, num3, num4)
// use FOR loops to check each integer values in reverse order in each array
// output using console.log to display the number variables in reverse order

// Enter integer values in an array (num1)
const num1 = [1, 2, 3];
// Enter integer values in an array (num2)
const num2 = [1, 3, 5, 7, 9, 11];
// Enter integer values in an array (num3)
const num3 = [20, 50, 30, 60, 200];
// Enter integer values in an array (num4)
const num4 = [1, -1, 2, -3, 5, -8, 13];

// FOR loop to check each integer in decrement (reverse order) in an array for constant variable num1
for (let i = num1.length - 1; i >= 0; i--) {
  // output integer values in reverse order using console.log
  console.log(num1[i]);
}

// FOR loop to check each integer in decrement (reverse order) in an array for constant variable num2
for (let i = num2.length - 1; i >= 0; i--) {
  // output integer values in reverse order using console.log
  console.log(num2[i]);
}

// FOR loop to check each integer in decrement (reverse order) in an array for constant variable num3
for (let i = num3.length - 1; i >= 0; i--) {
  // output integer values in reverse order using console.log
  console.log(num3[i]);
}

// FOR loop to check each integer in decrement (reverse order) in an array for constant variable num4
for (let i = num4.length - 1; i >= 0; i--) {
  // output integer values in reverse order using console.log
  console.log(num4[i]);
}
