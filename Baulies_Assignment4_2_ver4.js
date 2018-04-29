let simple_song = [
  //Melody
  {note: "A", note_on: 0, note_off: 1},
  {note: "B", note_on: 0, note_off: 4},
  {note: "C", note_on: 2, note_off: 3},
  {note: "D", note_on: 1, note_off: 2},
];

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
  {note: "C#", note_on: 0, note_off: 4},
  {note: "E", note_on: 0, note_off: 4},
  {note: "D", note_on: 4, note_off: 6},
  {note: "A", note_on: 4, note_off: 6},
  {note: "A", note_on: 6, note_off: 8},
  {note: "C#", note_on: 6, note_off: 8},
  {note: "F#", note_on: 8, note_off: 10},
  {note: "A", note_on: 8, note_off: 10},
  {note: "A", note_on: 10, note_off: 12},
  {note: "E", note_on: 10, note_off: 12},
  {note: "E", note_on: 12, note_off: 14},
  {note: "G", note_on: 12, note_off: 14},
  {note: "C#", note_on: 14, note_off: 16},
  {note: "E", note_on: 14, note_off: 16},
];

function play_song(song){
  //Sort by note_off.
  function compare_off(a,b) {
    if (a.note_off < b.note_off)
      return -1;
      if (a.note_off > b.note_off)
      return 1;
      return 0;
    }

  /*Song ordered by note_off in order to obtain max_time
  from the last object in the array.*/
  let song_off = song.sort(compare_off);

  let max_time = song_off[(song_off.length)-1].note_off;

  for (counter = 0; counter < (max_time+1); counter++){
    let print = [];
    for ( i=0; i < song_off.length; i++ ){
      if ( song_off[i].note_off == counter ){
        let value = song_off[i].note;
        print.push(value);
        console.log("At second " + counter + " release " + print);
      }
      if ( song_off[i].note_on == counter ){
        let value = song_off[i].note;
        print.push(value);
        console.log("At second " + counter + " play " + print);
      }
    }
  }
}

play_song(simple_song);

play_song(twinkle_twinkle);
