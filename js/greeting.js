const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onloginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function painGreetings(username) {
  const hour = new Date().getTime();
  let text = "";
  if (hour >= 6 && hour <= 12) {
    text = "Good Morning";
  } else if (hour > 12 && hour <= 18) {
    text = "Good Afternoon";
  } else {
    text = "Good Night";
  }
  greeting.innerText = `${text}  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onloginSubmit);
} else {
  painGreetings(savedUsername);
}
