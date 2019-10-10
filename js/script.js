var vowels = ["a", "e", "i", "o", "u"];

$( "document" ).ready(function() {
    $("#button").click(function() {
        var string = $(".input").val().toLowerCase();
        var words = string.split(" ");
        var vowel = false;

        words.forEach(function(word) {
            var pig1 = pig(word);
            var latin1 = latin(word);
            $(".output").append("<p>" + pig1 + latin1 + "</p>");
        })

        $(input).val("");
    })
});

function pig(word) {
    if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
        return "";
    } else {
        var array = word.split("");
        var slice = array.slice(1);
        return slice.join("");
    }
}

function latin(word) {
    if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
        return word + "way";
    } else {
        return word.charAt(0) + "ay";
    }
}