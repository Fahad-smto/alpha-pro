// function play(){
//      const  homeScreen = document.getElementById('home')
//     homeScreen.classList.add('hidden');

//      //show playground
//      const playGroundSection = document.getElementById('play-ground');
 
//      playGroundSection.classList.remove('hidden');
//      console.log(playGroundSection.classList);
// }

//---------- another way--------
function handleKeyboardKeyUpEvent(event){
     const playerPressed = event.key
     console.log(playerPressed);

     //get the expected to press
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedAlphabet = currentAlphabet.toLowerCase()
     console.log(playerPressed,expectedAlphabet);

     //check matched or not
     if (playerPressed===expectedAlphabet){
          console.log('you got a point');    
     }
     else{
          console.log('you missed.you lost a life');
     }
}
//capture keyboard key press
document.addEventListener('keyup',handleKeyboardKeyUpEvent)


function continueGame(){
     //step 1 generate a random alphabet
     const alphabet = getRandomAlphabet();
     console.log('Your random alphabet is:', alphabet);

     //set randomly generated alphabet to the screen (show it)
     const currentAlphabet = document.getElementById('current-alphabet');
     currentAlphabet.innerText = alphabet;

     //set background color 
     setBackgroundColorById(alphabet);
}

function play (){
     hideElementById('home');
     showElementById('play-ground');
     continueGame();
}    