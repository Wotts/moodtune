//λ curl -X GET "https://api.spotify.com/v1/search?q=%20genre:%22progressive%20metal%22&type=artist&limit=50"
q=%20genre:%22southern%20hip%20hop%22&type=artist
//1. random number
//2. API GET request
//3. take item nr. 'random' from the result
//4. extract url or uri
//5. play


var genre = "progressive%20metal";

function artistSucces(artistResult){
    var artistArray = artistResult.artists;
    var randomNum = Math.floor((Math.random()*50));

    console.log(artistArray.items[randomNum]);
}

$.ajax({
    method: 'GET',
    url: "https://api.spotify.com/v1/search?q=%20genre:%22" + genre + "%22&type=artist&limit=50",
    success: artistSucces,
    // error: error
})






pull a random item from a hash
the result will be an array of items, each with their own index position. 0 to 49.
