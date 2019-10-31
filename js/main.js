$('#ckLine').ckLine({
    leftRight: false,
    strokeColor: 'rgba(0,0,0,1)',
    interval: 800,
    animateTime: 1600,
    animationTimeRange: [800, 1600],
    easing: "swing"
});

$('#ckLine1').ckLine({
    leftRight: false,
    strokeColor: 'rgba(255,255,255,1)',
    interval: 800,
    animateTime: 1600,
    animationTimeRange: [800, 1600],
    easing: "swing"
});

$(document).ready(function () {
    $("#btnAdd1").click(function (e) {
        var list = $("#hello").val();
        $("<li>")
            .text(list)
            .prependTo("#Skill");
        $("#hello").val("");
    });
    $("#blink1").hide();
});
$(document).ready(function () {
    $("#Skill").on("click", "li", function () {
        $(this).toggleClass("select");
    });

    $("#btnRemove").click(function () {
        $("li.select").remove();
    });

    $("#blink").click(function () {
        $(".container").css("background-color", "#FFF");
        $(".container").css("color", "#000");
        $("body").css("background-color", "#000");
        $("input").css("background-color", "#FFF");
        $("input").css("border-color", "#FFF");
        $("input").css("color", "#000");
        $("#ckLine").hide();
        $("#ckLine1").show();
        $("#blink").hide();
        $("#blink1").show();
        $(".fa-facebook, .fa-instagram, .fa-twitter-square").css("color", "#000");

    });

    $("#blink1").click(function () {
        $(".container").css("background-color", "#000");
        $(".container").css("color", "#FFF");
        $("body").css("background-color", "#FFF");
        $("input").css("background-color", "#000");
        $("input").css("border-color", "#000");
        $("input").css("color", "#FFF");
        $("#ckLine1").hide();
        $("#ckLine").show();
        $("#blink1").hide();
        $("#blink").show();
        $(".fa-facebook, .fa-instagram, .fa-twitter-square").css("color", "#FFF");
    });

    $("#Skill").click(function () {
        $("#Skill li.select").css("color", "#FF0");
    });

});

function myFunction() {
    alert("Welcome to My World \r\n You can edit Name");
}
