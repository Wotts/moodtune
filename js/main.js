λ curl -X GET "https://api.spotify.com/v1/search?q=%20genre:%22metal%22&type=artist&limit=50"

pull a random item from a hash
the result will be an array of items, each with their own index position. 0 to 49.



1. random number
2. API GET request
3. take item nr. 'random' from the result
4. extract url or uri
5. play
