const mywords = ["royal", "rocky", "spoke", "proof"];
console.log("hello");

let currRow = 1; // start on first row
let wordGuess = ""; // keeps track of guess and used in check()

function getWord(){
    let word = mywords[Math.floor(Math.random()*mywords.length)]
    console.log(word);
    return word;
}

let word = getWord(); // random choose word which gets used in check()

 function move(current, nextFieldID){
    wordGuess += current.value;
     if(current.value.length >= 1){
         document.getElementById(nextFieldID).focus();
     }
 }

 function moveLast(current, nextFieldID){
     wordGuess += current.value;

     console.log("our guess: " + wordGuess)

     // check the words and recolor inputs
    check();

    if(current.value.length >= 1){
        // incremet currRow
        currRow += 1;
        // clear guessWord
        wordGuess = "";
        document.getElementById(nextFieldID).focus();
    }
}

function check(){
    for(let i = 0; i < 5; i++){
        let guessLetter = wordGuess.charAt(i);
        let rightLetter = word.charAt(i);
        if(word.includes(guessLetter)){ // if in word
            // check if corrent position
            if(guessLetter.localeCompare(rightLetter) == 0){ // correct position
                let col = i + 1; // column number
                let id = currRow.toString() + col.toString();
                document.getElementById(id).style.background = "green";
            }else{ // worng position
                let col = i + 1; // column number
                let id = currRow.toString() + col.toString();
                document.getElementById(id).style.background = "yellow";
            }

        }else{
            let col = i + 1;
            let id = currRow.toString() + col.toString();
            document.getElementById(id).style.background = "red";
        }
    }
    if(currRow == 5){ // if they go to the last row
        document.querySelector("span").innerHTML = "the word was: " + word;
    }

    

}

// not using below

 


