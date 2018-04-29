let data = [1,2,3,4,3,5,5,7];
console.log("the array 'data' is: " + data);

//PART 1

let new_value = 6;
function myset_add(data, new_value){
  data.push(new_value);
  console.log("the array 'data' with the new value is: " + data);
  return data;
}
myset_add(data, new_value);

//PART 2
data = [1,2,3,4,3,5,5,7];

let remove_value = 3;
function myset_remove(data, remove_value){
  let new_data = [];
  for(counter = 0; counter < data.length; counter++){
    if (data[counter] !== remove_value){
      new_data.push(data[counter]);
    }
  }
  data = new_data;
  console.log("'data' without the removed value is:" + data);
  return data;
}

myset_remove(data, remove_value);

//PART 3
data = [1,2,3,4,3,5,5,7];

let test_value = 3;
function myset_has(data, test_value){
  for (counter = 0; counter < data.length; counter++){
    if (data[counter] !== test_value){
      continue;
    }else{
      console.log(test_value + " is an element of 'data'");
      return true;
    }
  }
  console.log(test_value + " is not an element of 'data'");
  return false;
}

myset_has(data, test_value);

//PART 4
data = [1,2,3,4,3,5,5,7];

function myset_size(data) {
  let unique_array = []
  for(counter = 0; counter < data.length; counter++){
    for(let counter = 0;counter < data.length; counter++){
        if(unique_array.indexOf(data[counter]) == -1){
          unique_array.push(data[counter])
        }
    }
  }
  console.log("the size of 'data' is: " + unique_array.length);
  return unique_array.length
}

myset_size(data);

/*PART 5 I'm really not sure I did this one right. As I understand it,
using forEach in a set would be the same as with an array but skipping
repeated values, so the process would be to remove repeated values and
then pass on the callback function. I wrote an example callback function,
but couldn't manage to call it from outside the myset_forEach function, so
I nested it inside. Is this correct?*/
data = [1,2,3,4,3,5,5,7];

function myset_forEach(data, i){
  let unique_array = []
  for(counter = 0; counter < data.length; counter++){
    if(unique_array.indexOf(data[counter]) == -1){
      unique_array.push(data[counter])
    }
  }
  data = unique_array;

  function callback(data, i){
    for (counter = 0; counter < data.length; counter++){
      data[counter] = data[counter] + i;
    }
    console.log(data);
  }
  callback(data, i);
}

myset_forEach(data, 1);
