//λ curl -X GET "https://api.spotify.com/v1/search?q=%20genre:%22progressive%20metal%22&type=artist&limit=50"
//1. random number
//2. API GET request
//3. take item nr. 'random' from the result
//4. extract url or uri
//5. play

//pull a random item from a hash
//the result will be an array of items, each with their own index position. 0 to 49.

$(document).ready (function(){

    function artistSucces(artistResult){
        var artistArray = artistResult.artists;
        var randomNum = Math.floor((Math.random()*50));

        var uri = artistArray.items[Math.min(randomNum, artistArray.items.length-1)].uri;
        var url = "https://embed.spotify.com/?uri=" + uri;
        console.log(url);

        $("iframe").attr("src", url);
    }

    $(".col-md-9 .row div").on("click", function(){
        var genre = $(this).attr("data-attr");
        console.log(genre);


        $.ajax({
            method: 'GET',
            url: "https://api.spotify.com/v1/search?q=%20genre:%22" + genre + "%22&type=artist&limit=50",
            success: artistSucces,
            // error: error
        });

    });

});
