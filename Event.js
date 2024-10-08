$(document).ready(function () {

    // Click Method
    // $("p").click(function () {
       //$(this).hide();
       //$("p").hide();
    // });

   // dbclick Method 
   // $("p").dbclick(function () {
   //  $("p").css("background-color", "green");
   // });

   //mouse enter method
   // $("p").mouseenter(function () {
   //    $(this).css("color", "blue");
   //    alert("welcome to mouse enter");
   // });

   //mouse leave method 
   // $("p").mouseleave(function () {
   //    $(this).css("background-color", "yellow")
   // });

   // mouse down method
   $("p").mousedown(function () {
      $(this).addClass("bg-primary");
      $(this).addClass("text-white");
      $(this).addClass("p-5");
   });

});
