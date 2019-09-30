let contact = document.getElementById("book_contact");
let Book = document.getElementById("book");

Book.onclick = function() {
  if (contact.style.display === "block") {
    contact.style.display = "none";
  } else {
    contact.style.display = "block";
  }
  if (this.textContent === "Book") {
    this.textContent = "X";
  } else {
    this.textContent = "Book";
  }
};

let check = document.getElementById("check");
let sendcheck = document.getElementById("checksend");
let message = document.getElementById("message");

sendcheck.onclick = function() {
  check.style.display = "block";
};

let hide = document.getElementsByClassName("disable");
let send = document.getElementById("checksend");
send.addEventListener("click", function() {
  for (i = 0; i < hide.length; i++) {
    hide[i].style.display = "none";
  }
});

// contact form send

let sent = document.getElementById("contsend");
let thank = document.getElementById("thank");

sent.onclick = function() {
  thank.style.display = "block";
  if (thank.style.display == "block") {
    sent.style.display = "none";
  }else {
    thank.style.display = "block";
  }
};