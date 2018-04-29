//Caesar cipher function.
function rotate_encrypt(in_string, in_number){
  let encrypt = "";
  let i;
  let string_number = "0";
  let char_to_number;
  for (in_string, in_number, string_number, char_to_number, i=0; i < in_string.length; i++){
    char_to_number = (in_string.charCodeAt(i)+in_number);
    string_number = string_number + ", " + char_to_number;
    encrypt = String.fromCharCode(string_number);
  }
  console.log(encrypt);
}

rotate_encrypt("lol", 3);
