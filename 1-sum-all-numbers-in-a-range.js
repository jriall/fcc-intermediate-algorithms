// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// SOLUTION

function sumAll(arr) {
  let final = 0;
  for (let i=Math.min(...arr); i<=Math.max(...arr); i++) {
    final+=i;
  }
  return final;
}

sumAll([1, 4]);