function getText() {
    return document.getElementById("inputpara").value;
}

function showResult(text) {
    document.getElementById("result1").textContent = text;
}

// Count Vowels
function countVowels() {
    let str = getText();
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    showResult("Vowel Count: " + count);
}

// Longest Word (FIXED)
function longestWord() {
    let str = getText().trim();
    let words = str.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    showResult("Longest Word: " + longest);
}

// Palindrome
function checkPalindrome() {
    let str = getText().replace(/\s/g, "").toLowerCase();
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        showResult("It is a Palindrome");
    } else {
        showResult("Not a Palindrome");
    }
}

// Count Spaces
function countSpaces() {
    let str = getText();
    let count = str.split(" ").length - 1;
    showResult("Spaces: " + count);
}

// Count Lines
function countLines() {
    let str = getText();
    let count = str.split("\n").length;
    showResult("Lines: " + count);
}

// Uppercase
function toUpper() {
    showResult(getText().toUpperCase());
}

// Lowercase
function toLower() {
    showResult(getText().toLowerCase());
}

// Reverse Text
function reverseText() {
    let str = getText().split("").reverse().join("");
    showResult("Reversed: " + str);
}
// function countVowels(){
//     str = document.getElementById("inputpara").value 
//     vowels='aeiouAEIOU'
//     let countVowel=0
//     for(i=0;i<str.length;i++){
//         if(vowels.includes(str.charAt(i)))
//         {
//             countVowel++
//         }
//     }
//     document.getElementById("result1").textContent='vowel count '+countVowel
// }

// function longestWord(){
//      str = document.getElementById("inputpara").value 
//     let longestWord=''

//     let strArray = str.split("")
//     for(i=0;i<strArray.length;i++)
//     {
//         console.log(strArray[i],longestWord)
//         if(strArray.length>longestWord.length)
//         {
//             longestWord=strArray[i]
//         }
//     }
//     document.getElementById("result1").textContent='longest Word : ' +longestWord

    
// }

