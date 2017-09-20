//Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// SOLUTION

function translatePigLatin(str) {
    if (str[0].match(/[aeiou]/)) {
        return str + "way";
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str[i].match(/[aeiou]/)) {
                return str.substr(i, str.length) + str.substr(0, i) + "ay";
            }
        }
    }
}


translatePigLatin("california");