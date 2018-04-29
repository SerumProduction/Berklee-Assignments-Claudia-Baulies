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
  function compare_on(a,b) {
    if (a.note_on < b.note_on)
      return -1;
      if (a.note_on > b.note_on)
      return 1;
      return 0;
    }
  //Song ordered by note_on.
  let song_on = song.sort(compare_on);

  function compare_off(a,b) {
    if (a.note_off < b.note_off)
      return -1;
      if (a.note_off > b.note_off)
      return 1;
      return 0;
    }
  //Song ordered by note_off.
  let song_off = song.sort(compare_off);

  //Search function
  function searcher(array, property, value){
    for ( i=0; i < array.length; i++ ){
      if ( array[i].property == value ){
        results.push(i);
      }
    }
    return result;
  }

}

play_song(twinkle_twinkle);
