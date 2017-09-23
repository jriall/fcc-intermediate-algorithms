// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// SOLUTION

function addTogether() {
  var args = Array.from(arguments);
  if (args.length === 0) {
    return undefined;
  } else if (
    args.length === 2 &&
    typeof args[0] === 'number' &&
    typeof args[1] === 'number'
  ) {
    return args[0] + args[1];
  } else if (args.length === 1 && typeof args[0] === 'number') {
    return function (n) {
      if (typeof n === 'number') {
        return args[0] + n;
      }
      return undefined;
    };
  }
}