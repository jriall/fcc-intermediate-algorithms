// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// SOLUTION

function convertToRoman(num) {
  const table = [{decimal: 1000, roman: 'M'}, {decimal: 900, roman: 'CM'}, {decimal: 500, roman: 'D'}, {decimal: 400, roman: 'CD'}, {decimal: 100, roman: 'C'}, {decimal: 90, roman: 'XC'}, {decimal: 50, roman: 'L'}, {decimal: 40, roman: 'XL'}, {decimal: 10, roman: 'X'}, {decimal: 9, roman: 'IX'},{decimal: 5, roman: 'V'}, {decimal: 4, roman: 'IV'}, {decimal: 1, roman: 'I'}];
  let final = "";
  for (let i=0; i<table.length; i++) {
    while (table[i].decimal <= num) {
      final+=table[i].roman;
      num -= table[i].decimal;
    }
  }
  return final;
}

convertToRoman(36);
