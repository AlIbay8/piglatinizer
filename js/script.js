$( "document" ).ready(function() {
    $("#button").click(function() {
        var string = $(".input").val().toLowerCase();

        var pig = pig(string);
        var latin = latin(string);

        $(".output").append("<p>" + pig + latin + "</p>");
    })
});

function pig(word) {
    var array = word.split("");
    var slice = array.slice(1);
    return slice.join("");
}

function latin(word) {
    return word.charAt(0) + "ay";
}