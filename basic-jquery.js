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

   $("#btn-title").addClass("btn btn-primary");
   //$("h1").addClass("text-primary fs-1 text-decoration-underline");
   $("#btn-title").addClass("animate__animated animate__shakeY");
   $("h1").css("color", "green");
   $("h1").css("textTransform", "uppercase");
   //$("button").prop("disabled", true);
   $("p").html("<strong>maxamed</strong>");
   //$("button").remove();
   $("#btn-title").removeClass();

   // simple
   $(".btn").addClass("btn btn-info");
   $("#left").css("background-color", "gray");
   $("#left").css("padding", "2rem");
   $("#left").css("margin", "2rem");
   $("#left").css("display", "inline");

   $("#right").css("background-color", "brown");
   $("#right").css("padding", "2rem");
   $("#right").css("margin", "2rem");
   $("#right").css("display", "inline");

   //$("#target-1").appendTo("#right");
   //$("#target-4").appendTo("#left");
   //$("#target-1").clone().appendTo("#left");

   $(".btn:nth-child(2)").addClass("animate__animated animate__swing");
   $(".btn:odd").addClass("btn-danger");
});