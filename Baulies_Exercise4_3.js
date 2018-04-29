/*Exercise 4 Part 3
Given an array of objects with "first_name" and "last_name" fields,
write a callback for the ".sort" function to sort the names alphabetically
by last name. If two last names are the same, then sort those by first name.
*/

let name_Array = [];
name_Array[0] = {f_name: "Luke", l_name: "Skywalker"}
name_Array[1] = {f_name: "Leia", l_name: "Organa"}
name_Array[2] = {f_name: "Han", l_name: "Solo"}
name_Array[3] = {f_name: "Anakin", l_name: "Skywalker"}

console.log(name_Array[1].l_name);

let sorted = name_Array.sort(function(a, b){
    var nameA = name_Array[0].l_name, nameB = name_Array[1].l_name;

    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    if (nameA = nameB)
    return 0 //default return value (no sorting)
})
console.log(sorted);
