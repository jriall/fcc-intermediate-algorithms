// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// SOLUTION

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var flattened = args.reduce(function(a, b){
     return a.concat(b);
}, []);
  var final = [];
  for (var i=0; i<flattened.length; i++) {
    if (final.indexOf(flattened[i]) === -1) {
      final.push(flattened[i]);
    }
  }
  return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);