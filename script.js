// Initialize empty library
let myLibrary = [];

// Book object constructor function
function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book1 = new Book("bam","bog",200,true);
book2 = new Book("com","gog",100,true);

// Add new books to library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addToLibrary() {
    console.log("k")
}

function openForm() {
    document.getElementById("form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("form").style.display = "none";
  }