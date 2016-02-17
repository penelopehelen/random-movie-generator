var movies = [
    "Jurassic Park",
    "Stigmata",
    "Toy Story",
    "Pulp Fiction",
    "Moon",
    "Star Wars"
]
console.log(movies)


document.getElementById("test").addEventListener("click", function( event ) {
document.getElementById("movie").innerHTML = movies[Math.floor(Math.random() *movies.length)]
}, false);
