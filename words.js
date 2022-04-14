const mywords = ["royal", "rocky", "camera"];
console.log("hello");

function getWord(){
    let word = mywords[Math.floor(Math.random()*mywords.length)]
    console.log(word);
    return word;
}

function getFirst(){
   let first = document.querySelector("#first").value;
   console.log(first);
   if(first.localeCompare(word.substring(0,1)) != 0){
       console.log("wrong");
       document.getElementById("first").style.background = "red";
   }else{
       console.log("right");
       document.getElementById("first").style.background = "green";
   }
}

function checkTest(){
    let first = document.querySelector("#first").value;
    console.log(first);
    if(first.localeCompare(word.substring(0,1)) != 0){
        console.log("wrong");
        document.getElementById("first").style.background = "red";
    }else{
        console.log("right");
        document.getElementById("first").style.background = "green";
    }
 }

 function move(current, nextFieldID){
     if(current.value.length >= 1){
         document.getElementById(nextFieldID).focus();
     }
 }

 function moveLast(current, nextFieldID){
    if(current.value.length >= 1){
        document.getElementById(nextFieldID).focus();
    }
}

let word = getWord();

