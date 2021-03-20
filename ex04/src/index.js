// Only change code below this line

function sumFibonacci(num) {
  let prevNum = 0;
  let currNum = 1;
  let sum = 0;
  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      sum += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }

  return sum;
}
  // Only change code above this line

  console.log(sumFibonacci(1)); // Change this line
  console.log(sumFibonacci(10)); // Change this line
  console.log(sumFibonacci(20)); // Change this line
  console.log(sumFibonacci(3)); // Change this line
  console.log(sumFibonacci(-5)); // Change this line
  module.exports = sumFibonacci;