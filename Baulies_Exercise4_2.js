/*Exercise 4 Part 2
Write a function that will reverse the contents of
an array. Do not use the built-in ".reverse()" function.
*/

let my_Array = [1, "pear", 3, "apple", 5];

function reverse_Array(my_Array){
  let new_Array = [];
  for(counter = my_Array.length - 1, new_Array; counter > -1; counter--){
    let x = my_Array[counter];
    new_Array.push(x);
  }
  console.log(new_Array);
  return new_Array;
}

reverse_Array(my_Array);
