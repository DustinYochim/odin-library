const library = document.querySelector(".library");
let books = document.querySelectorAll(".book");
const modal = document.querySelector(".modal");
const form = document.querySelector(".book-form");

// Simple array to store book objects
const myLibrary = [];

// Write a constructor for making "book" objects
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

// Add a function that can take user's input and store the new book objects into myLibrary
function addToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}

// Shows the form to add a book
function showForm() {
  modal.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center;"
  );
}

// Hides the form to add a book
function hideForm() {
  form.reset();
  modal.style.display = "none";
}

// Shows books from myLibrary on page
function displayBooks() {
  // Remove Books from Page
  books = document.querySelectorAll(".book");
  books.forEach((item) => {
    item.remove();
  });
  // Add books back to page
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    newBook.classList.add("book");

    const newBookTitle = document.createElement("div");
    newBookTitle.classList.add("book-title");
    newBookTitle.textContent = `Title: ${book.title}`;
    newBook.appendChild(newBookTitle);

    const newBookAuthor = document.createElement("div");
    newBookAuthor.classList.add("book-author");
    newBookAuthor.textContent = `Author: ${book.author}`;
    newBook.appendChild(newBookAuthor);

    const newBookPages = document.createElement("div");
    newBookPages.classList.add("book-pages");
    newBookPages.textContent = `Pages: ${book.pages}`;
    newBook.appendChild(newBookPages);

    const newBookStatus = document.createElement("div");
    newBookStatus.classList.add("book-status");
    newBookStatus.textContent = `Status: ${book.status}`;
    newBook.appendChild(newBookStatus);

    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    const removeImg = document.createElement("img");
    removeImg.classList.add("remove-image");
    removeImg.src = "../img/close.svg";
    removeBookButton.appendChild(removeImg);
    removeBookButton.dataset.index = myLibrary.indexOf(book);
    newBook.appendChild(removeBookButton);

    library.appendChild(newBook);
  });
}

// Sets event listeners
function addEventListeners() {
  const btn = document.querySelector(".add-book");
  btn.addEventListener("click", showForm);

  const span = document.querySelector(".close");
  span.addEventListener("click", hideForm);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      hideForm();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;
    const status = form.elements.status.value;
    if (title !== "" && author !== "" && pages !== "" && status !== "") {
      addToLibrary(title, author, pages, status);
      hideForm();
      displayBooks();
      addEventListeners();
    }
  });

  const removeButtons = document.querySelectorAll(".remove-book-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      myLibrary.splice(button.dataset.index, 1);
      displayBooks();
      addEventListeners();
    });
  });
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const theGiver = new Book("The Giver", "J.R.R. Tolkien", 295, "not read yet");
const otherBook = new Book(
  "The Hitchhiker's Guide to the Galaxy",
  "J.R.R. Tolkien",
  295,
  "not read yet"
);

myLibrary.push(theHobbit);
myLibrary.push(theGiver);
myLibrary.push(otherBook);
function main() {
  displayBooks();
  addEventListeners();
}

main();
