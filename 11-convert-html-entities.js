// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

// SOLUTION

function convertHTML(str) {
  var mapObj = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;"
  };
  return str.replace(/&|<|>|"|'/gi, function(matched) {
    return mapObj[matched];
  });
}

convertHTML("Dolce & Gabbana");