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
   // $("p").mousedown(function () {
   //    $(this).addClass("bg-primary");
   //    $(this).addClass("text-white");
   //    $(this).addClass("p-5");
   // });

   // mouse up method 
   // $("p").mouseup(function () {
   //    $(this).css("background-color", "black");
   //    $(this).css("color", "white");
   // });

   // hover method
   // $("p").hover(function () {
   //    $(this).css("background-color", "blue");
   // });

   // On method 
   // $("p").on("mouseenter", function () {
   //    $(this).addClass("bg-primary");
   // });
   // or 

   // $("p").on({
   //    mouseenter: function () {
   //    $(this).css("background-color", 'blue');
   //    },

   //    mouseleave: function () {
   //    $(this).css("background-color", 'orange');
   //    }
   // });

   
   //Keyboard Event Method
   // $(document).keydown(function () {
   //    $(".k1").html("this is keydown " + event.which);
   //    $(".k1").css("color", "blue");
   // });

   // $(document).keypress(function () {
   //    $(".k2").html("this is keypress " + event.which);
   //    $(".k2").css("color", "green");
   // });

   // $(document).keyup(function () {
   //    $(".k3").html("this is a keyup" + event.which);
   // });

   // Form Events Methods
   // $("#t1").focus(function () {
   //    $("#s1").html(" enter your name");
   //    $("#s1").css("color", "red");
   //    $("#s1").css("textTransform", "capitalize");
   // });

   // $("#t1").blur(function () {
   //    $("#s1").html(" well done!");
   //    $("#s1").css("color", "green");
   //    let num = $("#t1").val();
   //    if(num.length < 1) {
   //       $("#s1").html(" minimun 3 char is required");
   //       $("#s1").css("color", "red");
   //    }
   // });

   // Filters Jquery
      // list
   $("#myinput").on("keyup", function () {
      let item = $(this).val().toLowerCase();
      $("#mylist li").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(item) > -1);
      });
   }); 

     // table
     $("#myInput").on("keyup", function () {
      let people = $(this).val().toLowerCase();
      $("#mytable tr").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(people) > -1);
      });
     });

     //everything
     $("#every").on("keyup", function () {
      let all = $(this).val().toLowerCase();
      $("#container *, #mylist li").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(all) > -1);
      });
     });

});

// how to lock text in input
// $(function () {
//    $("#t1").keypress(function (e) {
//       let x = e.which || e.keycode;
//       if (x >= 48 && x <= 57) {
//          return true;
//       } else {
//          return false;
//       }
//    });
// });

// how to lock numbers in input
// $(function () {
//    $("#t1").keypress(function (e) {
//       let x = e.which || e.keycode;
//       if (x >= 97 && x <= 122) {
//          return true;
//       } else {
//          return false;
//       }
//    });
// });

// well we will sammary
