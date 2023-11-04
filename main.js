let form = document.querySelector("form");

let username = document.querySelector("#user");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let errors = document.querySelector("#errors");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errors.innerHTML = '';

  let error_list = [];

  if (username.value.trim() === "") {
    error_list.push("Please Enter a Valid Username");
  }
  if (password.value.length <= 6) {
    error_list.push("Password Must be Greater Than 6 Characters");
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
    error_list.push("Please Enter a Valid Email");
  }

  if (error_list.length === 0) {
    window.location.href = "home.html";
  } else {
    error_list.forEach((element) => {
      let items_list = document.createElement("li");
      items_list.classList.add("newitem");
      items_list.innerText = element;
      errors.appendChild(items_list);
    });
  }
});