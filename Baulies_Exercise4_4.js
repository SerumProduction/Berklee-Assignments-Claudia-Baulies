/*Write a function called "flatten" that takes an array of arrays,
then returns a new array with just the values, in the same order.
"Flatten([[1,2], [3,4]])" should result in the array "[1,2,3,4]".

Optional Bonus 1: Don't use any of the built-in array functions.

Optional Bonus 2: Make this work recursively, so it will flatten
any amount of array nesting. "Flatten([[[1],2],[[[3]],[4]]])"
should also result in "[1,2,3,4]". There's a special function
that will be helpful here, "Array.isArray(my_var_here)" that
will return true if the parameter is an array.
*/

let nest_Array_1 = [1, 2];
let nest_Array_2 = [3, 4];
let my_Array = [nest_Array_1, nest_Array_2];

function flatten(my_Array){
  let flat_Array = [];
  for(counter = 0; counter < my_Array.length; counter++){
    if (Array.isArray(my_Array[counter]) == true){
      flatten(my_Array[counter]);
    }else{
      flat_Array.push(my_Array[counter])
    }
  }
  console.log(flat_Array);
}

flatten(my_Array);
