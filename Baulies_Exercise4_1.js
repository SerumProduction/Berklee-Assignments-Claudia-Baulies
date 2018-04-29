/*Exercise 4 Part 1:
Write a function that takes an array of integers
and returns the average value of all the elements.
*/

let my_Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Function to check if an element of the array is not a number.

function average(my_Array){
  for(counter = 0, sum = 0; counter < my_Array.length; counter++){
    sum = my_Array[counter] + sum;
    result = sum/my_Array.length;
  }
  console.log(result);
  return result;
}

average(my_Array);
