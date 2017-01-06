//λ curl -X GET "https://api.spotify.com/v1/search?q=%20genre:%22progressive%20metal%22&type=artist&limit=50"

$(document).ready (function(){

    function artistSucces(artistResult){
        var artistArray = artistResult.artists;
        var randomNum = Math.floor((Math.random()*50));

        var uri = artistArray.items[Math.min(randomNum, artistArray.items.length-1)].uri;
        var url = "https://embed.spotify.com/?uri=" + uri;

        $("iframe").attr("src", url).removeClass("hidden");
        $("h1").addClass("hidden");

        if (uri == "spotify:artist:0CEFCo8288kQU7mJi25s6E") {
            console.log("fuck");
            artistSucces(artistResult);
        }
    }

    $(".col-md-9 .row div").on("click", function(){
        var genre = $(this).attr("data-attr");

        $.ajax({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=%20genre:%22" + genre + "%22&type=artist&limit=50",
            success: artistSucces,
            // error: error
        });

    });

});
