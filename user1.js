let body = document.getElementById("body");
let login_signup = document.getElementById("login_signup");
let submit = document.getElementById("submit");
let mainPage = document.getElementById("mainPage");
let login = document.getElementById("login");

submit.addEventListener('click', (e) => {
    e.preventDefault(); 

    let first_name = document.getElementById("fname").value;

    if(first_name!=""){
        login_signup.innerHTML = first_name;
        mainPage.classList.remove("blur");
        login.classList.add("hidden");
        login.classList.remove("flex");
        body.classList.remove("overflow-hidden");
        alert("Successfully Logged in");
    }
    else alert("Invalid Username");
});
