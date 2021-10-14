//Task 1 jQuery Section

$(document).ready(function () {

    //Task 1 jQuery Section
    function blink() {
        $(".blinking").fadeToggle(500);
    }
    setInterval(blink, 500);

    //Task 2 jQuery Section

    $("#btn1").click(function () {
        $("#cl1").html("<b>Click</b>");
        $("#cl2").html("<b>Click</b>");
        $("#cl3").html("<b>Click</b>");
    });

    //Task 4 jQuery Section

    $("#addbtn").click(function () {

        var content = $("#addList").val();

        var fixingContent =

            '<li>' + content + '</li>';
        $("#List").append(fixingContent);

    });

    //Task 5 jQuery Section

    $("#btn").click(function () {
        $(".p1").removeClass('p1');
        $(".p2").removeClass('p2');
        $(".p3").removeClass('p3');
    });

    //Task 6 jQuery Section

    var element = $('<h1>', {
        text: "jQuery",
        class: "test"
    });

    $('#output').text(element.get(0).outerHTML);

    //Task 7 jQuery Section

    //task completed with html

    //Task 8 jQuery Section

    $("#disablebtn").click(function () {

        $(".disabledCheckboxes").prop("disabled", false);

    });

    //Task 9 jQuery Section

    var select = $("#c3");
    select.empty().append('<option value ="Orange">Orange</option>');

    //Task 10 jQuery Section

    let isBackgroundOne = true;
    let backgroundOne = "red";
    let backgroundTwo = "blue";

    $("#togglebg").mousedown(function (event) {


        let box = $("#togglebg");
        box.contextmenu(false);
        if (event.which == 3) {
            if (isBackgroundOne) {
                box.css({
                    backgroundColor: backgroundTwo
                });
            }
            else {
                box.css({
                    backgroundColor: backgroundOne
                });
            }
            isBackgroundOne = !isBackgroundOne;
        }
    });

    //Task 11 jQuery Section

    $("#inp").change(function () {
        $("<p>Input Text has been changed.</p>").appendTo("#inpresult");
    });

    //Task 12 jQuery Section

    var listItems = $('li');
    var rawListItem = listItems[1];
    var html = rawListItem.innerHTML;
    $("#selresult").text(html);

    //Task 13 jQuery Section

    $("#para13").mouseover(function () {

        $(this).css('color', 'red');

    });

    //Task 14 jQuery Section

    $("#animate").click(function () {

        $("#box1").slideUp(300).delay(800).fadeIn(400);
        $("#box2").slideUp(400).fadeIn(300);

    });

    //Task 15 jQuery Section

    $("#divanimbtn").click(function () {

        $("body").find(".divanim").eq(3).addClass("red");

    });

    //Task 16 jQuery Section

    $("#countelm").click(function () {

        var v = $(".li1").length;

        $("#countelmresult").text(v);

    });
    //Task 17 jQuery Section

    $("ul.tutorial > li")
        .css("border", "2px dashed green");

    //Task 18 jQuery Section

    $("#urlbtn").click(function () {

        $(".link").attr("href", "https://google.com");

    });

    //Task 19 jQuery Section

    $("#rowbtn").click(function () {

        $("#row2").remove();

    });

    //Task 20 jQuery Section

    $("#fadepara").click(function () {

        $(this).fadeTo(500, 0.40);

    });

});

//Task 3 jQuery Section

function new_div() {
    //$(document).ready(function () {
    var test = {
        id: "div",
        class: "divclass",
        css: {
            "color": "Green"
        }
    };
    var div = $("<div>", test);
    div.html("New Division");
    $("#newdiv").append(div);
    //});
}




