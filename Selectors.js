$(document).ready(function () {
        $("p >").css("color", "blue");
        $("li:not(.myclass)").css("background-color", "yellow");
        $("ul li:first").css("color", "red");
        $("ul li:last").css("color", "red");
        $("p.para").css("color", "blue");
});