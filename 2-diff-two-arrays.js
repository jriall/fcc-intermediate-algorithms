// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// SOLUTION

function diffArray(arr1, arr2) {
  return arr2.filter(a=>!arr1.includes(a)).concat(arr1.filter(b=>!arr2.includes(b)));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);