// Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

// The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

// Return the rest of the array, otherwise return an empty array.

// SOLUTION

function dropElements(arr, func) {
  var startArray = arr;
  var finalArray = startArray;
  for (var i=0; i<startArray.length; i++) {
    if (!(func(arr[i]))) {
      finalArray = startArray.slice(i+1, startArray.length);
    } else {
      return finalArray;
    }
  }
  return [];
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });