let myLibrary = [];
let container = document.getElementById("container");
let card = document.getElementById("card");

class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info =
      this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
  }
}

const theHobbit = new book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 Pages",
  "Not Read Yet"
);

const thinkAndGrowRich = new book(
  "Think and Grow Rich",
  "Napoleon Hill",
  "238 Pages",
  "Read"
);

const subconsciousMind = new book(
  "The Power of Your Subconscious Mind",
  "Joseph Murphy",
  "124 Pages",
  "Read"
);

const button = document.getElementById("btn");

button.addEventListener("click", function () {
  // create form and the inputs
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
  // create submit button
  const submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  submit.setAttribute("form", "form");
  submit.setAttribute("value", "submit");
  submit.innerHTML = "Add book!";
  // append everything to document
  document.body.appendChild(form);
  document.getElementById("form").appendChild(formTitle);
  document.getElementById("form").appendChild(formAuthor);
  document.getElementById("form").appendChild(formPages);
  document.getElementById("form").appendChild(formRead);
  document.getElementById("form").appendChild(submit);
  submit.addEventListener("click", function addToLibrary(event) {
    // take user input from form and add to myLibrary
    event.preventDefault();
    const userBook1 = new book(
      (this.title = document.getElementById("title").value),
      (this.author = document.getElementById("author").value),
      (this.pages = document.getElementById("pages").value),
      (this.read = document.getElementById("read").value)
    );
    myLibrary.push(userBook1);
  });
});

function displayBooks() {
  // display books on page
  const book1 = document.createElement("div");
  book1.setAttribute("id", "book1");
  book1.classList.add("books");
  card.appendChild(book1);
  document.getElementById("book1").innerHTML = theHobbit.info;
  const book2 = document.createElement("div");
  book2.setAttribute("id", "book2");
  book2.classList.add("books");
  card.appendChild(book2);
  document.getElementById("book2").innerHTML = thinkAndGrowRich.info;
  const book3 = document.createElement("div");
  book3.setAttribute("id", "book3");
  book3.classList.add("books");
  card.appendChild(book3);
  document.getElementById("book3").innerHTML = subconsciousMind.info;
  // const userBook1 = document.createElement("div");
  // userBook1.setAttribute("id", "userBook1");
  // userBook1.classList.add("books");
  // card.appendChild(userBook1);
  // document.getElementById("userBook1").innerHTML = userBook1.info;
}

displayBooks();
