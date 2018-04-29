/*This week, we want you to write a player piano.
Well, a program to read a player-piano-esque input and write out
the notes to be played, with the correct timing. Your piano should
be able to play notes A-G, plus flats and sharps (ignore the octave,
though, it's a very small piano). Each note should also say when it
is to start playing and for how long it should be played (in seconds).
Your program should print out a direction when each note is to start
playing, and again when it ends. The output should be ordered
chronologically.*/

/*The way I understand it, this exercise will emulate the functioning
of midi messages, sending note_on and note_off messages, but ignoring velocity.
Time will be measured in beats, but there will be no measures,
so the beat count is not cyclical.*/

let twinkle_twinkle = [
  //Melody
  {note: "A", note_on: 0, note_off: 1},
  {note: "A", note_on: 1, note_off: 2},
  {note: "E", note_on: 2, note_off: 3},
  {note: "E", note_on: 3, note_off: 4},
  {note: "F#", note_on: 4, note_off: 5},
  {note: "F#", note_on: 5, note_off: 6},
  {note: "E", note_on: 6, note_off: 8},
  {note: "D", note_on: 8, note_off: 9},
  {note: "D", note_on: 9, note_off: 10},
  {note: "C#", note_on: 10, note_off: 11},
  {note: "C#", note_on: 11, note_off: 12},
  {note: "B", note_on: 12, note_off: 13},
  {note: "B", note_on: 13, note_off: 14},
  {note: "A", note_on: 14, note_off: 16},
  //Harmony
  {note: "A", note_on: 0, note_off: 4},
  {note: "C#", note_on: 0, note_off: 4},
  {note: "E", note_on: 0, note_off: 4},
  {note: "D", note_on: 4, note_off: 6},
  {note: "F#", note_on: 4, note_off: 6},
  {note: "A", note_on: 4, note_off: 6},
  {note: "A", note_on: 6, note_off: 8},
  {note: "C#", note_on: 6, note_off: 8},
  {note: "E", note_on: 6, note_off: 8},
  {note: "D", note_on: 8, note_off: 10},
  {note: "F#", note_on: 8, note_off: 10},
  {note: "A", note_on: 8, note_off: 10},
  {note: "A", note_on: 10, note_off: 12},
  {note: "C#", note_on: 10, note_off: 12},
  {note: "E", note_on: 10, note_off: 12},
  {note: "E", note_on: 12, note_off: 14},
  {note: "G", note_on: 12, note_off: 14},
  {note: "B", note_on: 12, note_off: 14},
  {note: "A", note_on: 14, note_off: 16},
  {note: "C#", note_on: 14, note_off: 16},
  {note: "E", note_on: 14, note_off: 16},
];

function play_song(song){
//Print n_on nicely.
  function print_nice_note_on(i){
    console.log("Start playing " + pitch[i] + " at beat " + n_on);
  }
//Print n_off nicely.
  function print_nice_note_off(i){
    console.log("Stop playing " + pitch[i] + " at beat " + n_off);
  }

//pitch is a new array that holds all note values in order.
  let pitch = [];
  for (counter = 0; counter < song.length; counter++){
    pitch.push(song[counter].note);
  }

//n_on is a new array that holds all note_on values in order.
  let n_on = [];
  for (counter = 0; counter < song.length; counter++){
    n_on.push(song[counter].note_on);
  }

//n_off is a new array that holds all note_off values in order.
  let n_off = [];
  for (counter = 0; counter < song.length; counter++){
    n_off.push(song[counter].note_off);
  }

  let index = [];
  for (counter = 0; counter < n_off.length; counter++){
    let i = 0;
    let index.counter(counter);
    for (i = 0; i < n_off.length; i++){
      if(n_on[i] == counter){
        index.push(i);
      }
    }
    console.log(index.counter(counter));
  }
}


play_song(twinkle_twinkle);
