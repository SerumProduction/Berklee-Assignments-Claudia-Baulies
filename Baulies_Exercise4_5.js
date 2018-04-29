/*Write a function that takes an object parameter and prints out
the content of the object nicely. Each line of output, from console.log,
should show each key and its associated value.*/

let my_obj = { name: "Patrick", location: "Virginia" };

function pretty_print(my_obj){
  for (counter = 0; counter < Object.keys(my_obj).length; counter++){
    console.log(Object.keys(my_obj)[counter] + ": " + Object.values(my_obj)[counter])
  }
}

pretty_print(my_obj);
