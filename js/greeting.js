/* greeting */


const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDENCLASSNAME = "hidden";
const SAVEUSER = "saveUserName";


function buttonOnClick(event){
    event.preventDefault();

    loginForm.classList.add(HIDDENCLASSNAME);

    const userName = loginInput.value;

    localStorage.setItem(SAVEUSER, userName);

    paintGreetings(userName);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDENCLASSNAME);
    greeting.innerText = `Hello,  ${username}`;
}

const savedUserName = localStorage.getItem(SAVEUSER);

if(savedUserName === null){
    loginForm.classList.remove(HIDDENCLASSNAME);
    loginForm.addEventListener("submit", buttonOnClick);
}else{
    loginForm.classList.add(HIDDENCLASSNAME);

    paintGreetings(savedUserName);
}



