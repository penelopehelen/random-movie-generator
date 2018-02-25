fetch("movies.json").then(function(response) {
  return response.text();
}).then(function(movies) {
  console.log( JSON.parse(movies))

  var movies = JSON.parse(movies);
    document.getElementById("movie_selector").addEventListener("click", function( event ) {
      var movies = movies[Math.floor(Math.random() *movies.length)];
      document.getElementById("movie").innerHTML = movie.title
  }, false);
})
