//test do_something function
function test_do_something(in_string){
  if(do_something("dog") !== "dog"){
    console.log("failed dog");
  }else{
    console.log("dog OK");
  }

  if(do_something("dog ") !== "dog"){
    console.log("failed dog' '");
  }else{
    console.log("dog' ' OK");
  }

  if(do_something("dog.") !== "dog"){
    console.log("failed dog.");
  }else{
    console.log("dog. OK");
  }

  if(do_something("dog,") !== "dog"){
    console.log("failed, dog");
  }else{
    console.log("dog, OK");
  }

  if(do_something("dog?") !== "dog"){
    console.log("failed dog?");
  }else{
    console.log("dog? OK");
  }

  if(do_something("dog!") !== "dog"){
    console.log("failed dog!");
  }else{
    console.log("dog! OK");
  }

  if(do_something("dog4") !== "dog"){
    console.log("failed dog4");
  }else{
    console.log("dog4 OK");
  }

  if(do_something("dog's") !== "dog's"){
    console.log("failed dog's");
  }else{
    console.log("dog's OK");
  }

  if(do_something(" dog") !== "dog"){
    console.log("failed ' 'dog");
  }else{
    console.log("' 'dog OK");
  }
}
