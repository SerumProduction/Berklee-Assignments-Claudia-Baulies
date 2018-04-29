//reverse string function.
let in_string = "lol";
let str_reversed = "";

function reverse_string(in_string) {
  let counter;
    for (counter = 0, in_string.length, str_reversed;
    counter < in_string.length; counter++ ) {
      str_reversed = in_string[counter] + str_reversed;
    }

  return str_reversed
}
//runs reverse_string function
reverse_string(in_string);

//checks if in_string is a palindrome by comparing it to its reverse string.
if (in_string == str_reversed) {
  console.log("the word '" + in_string +  "' is a palindrome!")
} else {
  console.log("the word '" + in_string +  "' is not a palindrome!")
}
