let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info =
    this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
  myLibrary.push(this.info);
  console.log(myLibrary);
}

const theHobbit = new book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 Pages",
  "Not Read Yet"
);

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  const formTitle = document.createElement("input");
  formTitle.setAttribute("id", "title");
  formTitle.setAttribute("placeholder", "Book title:");
  const formAuthor = document.createElement("input");
  formAuthor.setAttribute("id", "author");
  formAuthor.setAttribute("placeholder", "Book author:");
  const formPages = document.createElement("input");
  formPages.setAttribute("id", "pages");
  formPages.setAttribute("placeholder", "Book pages:");
  const formRead = document.createElement("input");
  formRead.setAttribute("id", "read");
  formRead.setAttribute("placeholder", "Have you read this book?:");
  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.setAttribute("form", "form");
  submit.setAttribute("value", "submit");
  submit.innerHTML = "Add book!";
  document.body.appendChild(form);
  document.getElementById("form").appendChild(formTitle);
  document.getElementById("form").appendChild(formAuthor);
  document.getElementById("form").appendChild(formPages);
  document.getElementById("form").appendChild(formRead);
  document.getElementById("form").appendChild(submit);
});

let submit = document.getElementById("submit");

submit.addEventListener("click", function addToLibrary() {
  // take user input from form and add to myLibrary
  const userBook1 = new book(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pages = document.getElementById("pages").value),
    (read = document.getElementById("read").value)
  );
  myLibrary.push(userBook1);
});
