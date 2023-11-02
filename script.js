let  guesses = 5
let blankSpace = []
let successFlag = false 
let successGuess = 0
let inputWord = ""
function randomWord() {
    let wordList = ["affix","avenue","awkward","beekeeper","boggle","cobweb","cycle","disavow","duplex","equip","exodus","funny","galaxy","gossip","icebox","injury","ivory","jackpot","jelly","jockey","joking","joyful","jumbo","kayak","khaki","kiosk","lengths","lucky","luxury","lymph","nightclub","onyx","ovary","pajama","pneumonia","pshaw","puppy","scratch","staff","stretch",]
    let listLength = wordList.length
    let listNumber = Math.floor(Math.random() * listLength)
    inputWord = wordList[listNumber]
    return inputWord
}
let customWord = confirm("Do you want to play alone(Okay for built in words, cancel for custom word)")  
if (customWord === true) {
randomWord()
}
else {
    inputWord = prompt ("Enter your word")
}



inputWord = inputWord.toLowerCase()
let wordLength = inputWord.length
for (let i = 0; i < wordLength; i++) {

blankSpace[i] = "_"
}


while (guesses > 0) {
    successFlag = false
let wordGuess = prompt ("Guess a letter")
wordGuess = wordGuess.toLowerCase()

for (let i = 0; i < wordLength; i++) {  

if (inputWord.charAt(i) === wordGuess) {
blankSpace[i] = wordGuess
successGuess ++
successFlag = true
}
    } 
     
if (successFlag === false) {
    guesses --
    alert("You have "+ guesses +" guesses left!")
}
else {
    alert("Correct!")
}
alert (blankSpace)
if (successGuess === wordLength) {
    break
}



}


if (successGuess === wordLength) {
    alert("You win")

}
else {
alert("Game over")
}
    document.getElementById("l1").innerHTML = "The word was " + inputWord;
  

