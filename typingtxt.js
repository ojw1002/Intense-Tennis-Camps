/*Typer text animation on index.html*/

// gets element
const TEXT = document.querySelector('.typing');

//words array
const WORDS = [
  "Hello there!",
];

// start typing effect
setTyper(TEXT, WORDS);

function setTyper(element, words) {

  const TYPE_DELAY = 100;
  const STAY_DELAY = 2000;

  const DIR_FORWARD = 0;
  const DIR_BACKWARD = 1;

  var direction = DIR_FORWARD;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInt;

  startTyping();

  //sets the interval to begin typing
  function startTyping() {
    wordTypeInt = setInterval(typeLetter, TYPE_DELAY);
  }

  //types each letter of word
  function typeLetter() {

    //sets the array to the const
    const word = words[wordIndex];

    //increment for forwards
    if (direction == DIR_FORWARD) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIR_BACKWARD;
        clearInterval(wordTypeInt);
        setTimeout(startTyping, STAY_DELAY);
      }

    }

    //decrement for backwards 
    else if (direction == DIR_BACKWARD) {
      letterIndex--;

      //at the end of the word go to the next one
      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

 /*doesn't go to next word, but it starts our only word*/
  function nextWord() {

    letterIndex = 0;
    direction = DIR_FORWARD;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }


}
