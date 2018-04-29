//Function to transpose a note a whole number of steps
function transpose(note, steps){
  let new_note; //final result of the transposition
  note = note.toUpperCase();//converts input note to upper case

  let number_note; //note converted to number + steps
  number_note = note.charCodeAt() + steps;

  //limits range between A and G
  while (number_note > 71){
    number_note = number_note - 7;
  }

  //converts number_note back to letter
  new_note = String.fromCharCode(number_note);

  console.log(new_note);

  return new_note;

}

transpose("C", 2);
