const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");



// pseudocode
// //if the user input is similar to the letter of the correct word it will write the letter in the box with its correct position
// //else it will wride beside the wrong letter
// // during this process countdown will occur
// // if it reaches 0 it will alert gameover 

let word, maxGuesses, incorrectLetters = [], correctLetters = [];



function randomWord(){
    //first we have to select random word which contains the word and its hint included from the word list 
    //math.random returns a floating number between 0 and 1 inclusive if we multiply it by list lengthand floor returns
    //the largest integer less than or equal to the number 
    let randomWord=wordList[Math.floor(Math.random() * wordList.length)];
    word=randomWord.word;
    maxGuesses=word.length>=5?8:6;
    correctLetters=[]; incorrectLetters=[];
    hintTag.innerText=randomWord.hint;
    guessLeft.innerText=maxGuesses;
    wrongLetter.innerText=incorrectLetters;
     
    //after initialization we have to specify the length ofour input by knowing the length of the word length generated
    let html="";
    for (let i = 0; i < word.length; i++){
        html+=`<input type="text" disabled>`
        inputs.innerHTML=html;
    }



}
randomWord();


function initGame(e) {
   
    let key = e.target.value.toLowerCase(); //we are changing to lowercase because the words are in lowercase target is our input or ehat we typr
    //if the key is a letter that means  any character from lowercase a through uppercase Z. 

    
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
     if(word.includes(key)){
         for(let i = 0; i < word.length; i++){
             if(word[i] == key){
                 correctLetters+=key;
                 inputs.querySelectorAll("input")[i].value = key;
             }
            }
        }
             else{
                 maxGuesses--;
                 incorrectLetters.push(`${key}`);
             }
             guessLeft.innerText=maxGuesses;
             wrongLetter.innerText=incorrectLetters;
         }
       
     
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);

}
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => 
typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());