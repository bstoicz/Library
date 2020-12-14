// Initialize empty library
let myLibrary = [];

// Loop through library to display elements by row
function libraryLoop (myLibrary) {
  data = document.getElementById("table-data");
  while (data.hasChildNodes()) {
    data.removeChild(data.lastChild);
  }
  for (let i = 0; i < myLibrary.length; i++) {
    let table = document.getElementById("table-data");
    let row = table.insertRow();
    row.id = "row" + (i+1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    cell0.innerHTML = myLibrary[i].title;
    cell1.innerHTML = myLibrary[i].author;
    cell2.innerHTML = myLibrary[i].pages;
    cell3.innerHTML = myLibrary[i].read == true? "Yes":"No";
    cell0.className = "cell";
    cell1.className = "cell";
    cell2.className = "cell";
    cell3.className = "cell";
    let buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "X";
    buttonDelete.className = "delete-btn";
    buttonDelete.id = String(i);
    buttonDelete.setAttribute("onclick",`deleteRow(${i})`);
    cell4.appendChild(buttonDelete);
    let buttonRead = document.createElement("button");
    buttonRead.innerHTML = "Read";
    buttonRead.className = "read-btn";
    buttonRead.id = String(i);
    buttonRead.setAttribute("onclick",`toggleRead(${i})`);
    cell5.appendChild(buttonRead);
  }
}

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
    let read = document.querySelector('input[name="read"]:checked').value == "yes"? true:false;
    book = new Book(title,author,pages,read);
    myLibrary.push(book);
    libraryLoop(myLibrary);
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

// Delete item from array and rerun libraryLoop to display updated array
function deleteRow(i) {
  myLibrary.splice(i,1);
  libraryLoop (myLibrary);
}

function toggleRead(i) {
  if (myLibrary[i].read == true) {
    myLibrary[i].read = false;
  }
  else {myLibrary[i].read = true}
  libraryLoop (myLibrary);
}