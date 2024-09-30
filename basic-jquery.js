// jQuery(document).ready(function() {

//    $("h1").css("color", "blue");

// });

// another way

// $(function () {

//    $("h1").css("color", "blue");

// });

// Basic of JQuery
// ==============

// string

let name = "collage";
console.log(name);

// number

let num = -0.1234;
console.log(num);

// boolen

let boo = false;
console.log(boo);

// object

const employ = {
   name: "yasiin",
   xaafada: "goljano",
   age: 30
};

employ.name = "faarax";

console.log(employ.name);

// array 

let arr = ["sahra", "xasan", "asma", "suhyb"];

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.map((array) => {
//     console.log(array);
// });

// Basic methods
// ==============

$(function () {

   $("button").addClass("btn btn-primary");
   //$("h1").addClass("text-primary fs-1 text-decoration-underline");
   $("button").addClass("animate__animated animate__shakeY");
   $("h1").css("color", "green");
   $("h1").css("textTransform", "uppercase");
   $("button").prop("disabled", true);
});