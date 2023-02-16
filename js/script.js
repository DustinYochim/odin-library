// Get the modal
const bookshelf = [];

const modal = document.getElementById("book-form");

// Get the button that opens the modal
const btn = document.getElementById("add-book");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.setAttribute("style", "display: block;");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.setAttribute("style", "display: none;");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.setAttribute("style", "display: none;");
  }
};
