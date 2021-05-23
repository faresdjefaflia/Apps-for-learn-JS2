/*
function myAgeinDays(theAge){
    var year = 365;
    return "hello your age in days is" + " " + theAge * year;
}
var theagedays = prompt("enter your age")
document.getElementById("age").innerHTML = myAgeinDays(theagedays);
*/


function hello (name, age){ 
    return "Hello" + " " + name + " I know you, your age :" + age;
}
var thename = prompt("enter you name");
var theage = prompt("enter your age");
document.getElementById("txt").innerHTML = hello(thename, theage);