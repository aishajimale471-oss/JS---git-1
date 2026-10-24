    let atm = 5;
   while (atm > 0) {
    let SecNum = prompt("Guess THE NUMBER:");
    if (SecNum === null) { 
    alert("Canceled secessfully.");
    break;
  }
    SecNum = Number(SecNum);

    if (SecNum === 15) {
     alert("Congrats! You guessed the right number buddy!");
     break;
  }  else if (SecNum > 15) {
     alert("The number is too high .Try LOWER");

  }  else if (SecNum < 15) {
     alert("The number is too low. Try Higher");

  }  else if (SecNum < 0) {
     alert("Enter a valid number.");
     break;
  }

  atm -= 1;
}

if (atm === 0) {
  alert("You’re out of moves");
}
