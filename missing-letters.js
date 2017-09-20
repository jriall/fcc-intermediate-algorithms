// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// SOLUTION

function fearNotLetter(str) {
    let final;
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(i + 1) - 1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return final;
}

fearNotLetter("abce");