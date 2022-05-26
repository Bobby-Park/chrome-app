const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KE = "username" ;
function onLoginSubmint(event) {
   event.preventDefault();
   const username = loginInput.value;
   localStorage.setItem( USERNAME_KE , username);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KE);

if(savedUsername === null){
     loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit", onLoginSubmint);
} else {
    paintGreetings(savedUsername);
}