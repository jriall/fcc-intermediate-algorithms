// Flatten a nested array. You must account for varying levels of nesting.

//SOLUTION

function steamrollArray(arr) {
  var final = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      final = final.concat(steamrollArray(arr[i]));
    } else {
      final.push(arr[i]);
    }
  }
  return final;
}

steamrollArray([1, [2], [3, [[4]]]]);