// Word array
const word = ['jupiter', 'above', 'alpha', 'omega', 'gravity'];




// Choose word randomly
let randWord = Math.floor(Math.random() * word.length);
let chosenWord = word[randWord];
console.log(chosenWord);
let underScore = [];
console.log(chosenWord);


// Create underscores based on length of the word
let generateUnderscore = () => {
   for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
   }
   return underScore;
}

console.log(generateUnderscore());
// Get users guess 
document.addEventListener('keypress', (event) => {
          let keycode = event.keyCode;
          let keyword = String.fromCharCode(keycode);
          console.log(keyword);
});
// Check if word is right 
// If right push to right array 
// If wrong push to wrong array