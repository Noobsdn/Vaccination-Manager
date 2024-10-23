let login_signup=document.getElementById("login_signup");
let mainPage=document.getElementById("mainPage");
let login=document.getElementById("login");
let submit=document.getElementById("submit");
let img=document.getElementById("img");
let body=document.getElementById("body");
let close=document.getElementById("close");

login_signup.addEventListener('click', ()=>{
    mainPage.classList.add("blur");
    login.classList.remove("hidden");
    login.classList.add("flex");
    body.classList.add("overflow-hidden");
});

close.addEventListener('click', ()=>{
    mainPage.classList.remove("blur");
    login.classList.add("hidden");
    login.classList.remove("flex");
    body.classList.remove("overflow-hidden");
})
