fetch("books.json").then(function(response) {
  return response.text();
}).then(function(books) {
  console.log( JSON.parse(books))

  var books = JSON.parse(books);
    document.getElementById("book_selector").addEventListener("click", function( event ) {
      var book = books[Math.floor(Math.random() *books.length)];
      document.getElementById("book").innerHTML = book.title + ", " + book.author;
  }, false);
})
