/*function for adding a series of numbers between a range.
num_1<num_2
*/
let result;
function sum_range(num_1, num_2) {
  if (num_1>num_2) {
    console.log("1st number must be smaller than 2nd number")
  }
  else{
    for (num_1, num_2, result = 0; num_1 <= num_2; num_1++) {
    result = num_1 + result;
    }
  }
  return result;
}

sum_range(1, 3);

console.log(result);

//function for testing sum_range
function test_sum_range(){
  if (sum_range(1, 3) !== 6 ){
    console.log("Positive numbers FAIL");
  }else {
    console.log("Positive numbers OK");
  }
  if (sum_range(-1,3) !== 5 ){
    console.log("Negative/Positive FAIL");
  }else {
    console.log("Negative/Positive OK");
  }
  if (sum_range(-3,-1) !== -6 ) {
    console.log("Negative numbers FAIL");
  }else {
    console.log("Negative numbers OK")
  }
}

test_sum_range()
