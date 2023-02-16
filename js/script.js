// Get the modal
const bookshelf = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}
function addToBookshelf() {
  const title = prompt("Title");
  const author = prompt("Author");
  const pages = prompt("Pages");
  const status = prompt("Status");
  const newBook = new Book(title, author, pages, status);
  bookshelf.push(newBook);
}

function showBookshelf() {
  bookshelf.forEach((book) => {
    console.log(book);
  });
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
bookshelf.push(theHobbit);

// addToBookshelf();
showBookshelf();

// MODAL
const modal = document.querySelector(".modal");
const btn = document.querySelector(".add-book");
const span = document.querySelector(".close");
console.log(span);
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
