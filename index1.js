const randomNum = Math.floor(Math.random() * 100 + 1);

console.log(randomNum);

window.alert(guessNumber(randomNum));

function guessNumber(randomNum) {
  let guess = parseInt(window.prompt("Please guess a number between 1-100"));
  console.log(guess);

 let attempt = 1;
  let returnMessage;

  if (! isNaN(guess)) {
    while (guess !== randomNum && attempt < 10 && guess !== isNaN) {
        if(guess < randomNum){
            returnMessage = 'Number is higher than your guess. Please try again.'
        }else{
            returnMessage = 'Number is lower than your guess. Please try agian'
        }
        attempt++
        guess = parseInt(window.prompt(`${returnMessage}, please pick a number between 1-100`))
        console.log(returnMessage);
        connsole.log(attempt);
    }
}else{
        returnMessage = 'Please enter a valid number'
    }
    console.log(returnMessage);
    return returnMessage;

  }


