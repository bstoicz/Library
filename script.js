// Initialize empty library
let myLibrary = [];


// Book object constructor function
function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Event listener for form submittal
document.getElementById('add-new').onsubmit = addBookToLibrary;


// Add book object to library from form
function addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name="read"]:checked').value == "yes"? true:false ;
    myLibrary.push(book);
    closeForm();
    return false;
}

// Open popup form function
function openForm() {
    document.getElementById("form").style.display = "block";
  }

// Close popup form function
function closeForm() {
    document.getElementById("form").style.display = "none";
    clearForm();
  }

// Clear form of all input information 
function clearForm() {
  document.getElementById("title").value = null;
  document.getElementById("author").value = null;
  document.getElementById("pages").value = null;
  document.getElementById("yes").checked = false;
  document.getElementById("no").checked = false;
}