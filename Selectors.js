$(document).ready(function () {
        $("*").css("background-color", "lightblue");
        $("p >").css("color", "blue");
        $("li:not(.myclass)").css("background-color", "yellow");
        $("ul li:first").css("color", "red");
        $("ul li:last").css("color", "red");
        $("div p").css("color", "gray");
        $("p.para").css("color", "blue");
});