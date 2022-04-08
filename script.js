//DOM Elements

const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const feedsPage = document.querySelector(".feeds-page");
const middleContent = document.querySelector(".middle-content");
const modal = document.querySelector(".login-modal");
const iLoginModal = document.querySelector(".login-modal i");
const userNameLogin = document.querySelector(".login-user-info");
const passwordLogin = document.querySelector(".login-password");
const btnLoginPage = document.querySelector(".login-form-btn");
const modalWrapper = document.querySelector(".post-modal-wrapper");
const modalPost = document.querySelector(".modal");
const iModalClose = document.querySelector(".modal-header i");
const btnModalPost = document.querySelector(".modal-header button");
const inputModal = document.querySelector(".modal-input");
const modalSpanPlus = document.querySelector(".modal-icons span");
const btnValidation = document.querySelector(".btn-top");
const postBtn = document.querySelector(".post-btn");
const arrowDownUser = document.querySelector(".user i");
const sidebarWrapper = document.querySelector(".side-bar-wrapper");
const userHeader = document.querySelector(".user");
const sidebar = document.querySelector(".side-bar");
const sideBarClose = document.querySelector(".side-bar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const darkEl1 = document.querySelectorAll(".dark-mode-1");
const darkEl2 = document.querySelectorAll(".dark-mode-2");
const lightEls = document.querySelectorAll(".light-text");
const border = document.querySelectorAll(".border");

/*******************************************************/ 

//Main-Page:

const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
};


middleContent.addEventListener("click", (e) => {
    if(e.target.classList[1] === "main-btn"){
        goToLoginPage();
    }
});

btnValidation.addEventListener("click", () => {
    const userName = document.querySelector(".user-info");
    const password = document.querySelector(".password");

    if(userName.value !== "" && password.value !== ""){
        if(userName.value === "eko" && password.value === "123"){
            mainPage.style.display = "none";
            feedsPage.style.display = "block";
        }else{
            goToLoginPage();
            modal.style.display = "block";
            btnLoginPage.addEventListener("click", () => {
                if(userNameLogin.value === "eko" && passwordLogin.value === "123"){
                    modal.style.display = "none";
                    loginPage.style.display = "none";
                    feedsPage.style.display = "block";
                }else{
                    modal.style.display = "block";
                }
            })
        }
    }else{
        goToLoginPage();
        modal.style.display = "block";
        btnLoginPage.addEventListener("click", () => {
            if(userNameLogin.value === "eko" && passwordLogin.value === "123"){
                modal.style.display = "none";
                loginPage.style.display = "none";
                feedsPage.style.display = "block";
            }else{
                modal.style.display = "block";
            }
        })
    }
});

iLoginModal.addEventListener("click", function(){
    modal.style.display = "none";
});

postBtn.addEventListener("click", () => {
    modalPost.style.display = "block";
    modalWrapper.classList.add("post-modal-wrapper-display");
});

iModalClose.addEventListener("click", function(){
    modalPost.style.display = "none";
    modalWrapper.classList.remove("post-modal-wrapper-display");
    if(inputModal.value !== ""){
        inputModal.value = "";
    }
    changeOpacity(0.5);
});

inputModal.addEventListener("keypress", (e) => {
    if(e.target.value !== ""){
        changeOpacity(1);
    }
});

inputModal.addEventListener("blur",(e) => {
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
});

const changeOpacity = function(x) {
    btnModalPost.style.opacity = x;
    modalSpanPlus.style.opacity = x;
};

userHeader.addEventListener("click", () => {  
    sidebar.classList.add("side-bar-display");
    sidebarWrapper.classList.add("side-bar-wrapper-display");
});

sideBarClose.addEventListener("click", () => {
    sidebar.classList.remove("side-bar-display");
    sidebarWrapper.classList.remove("side-bar-wrapper-display");
});

toggle.addEventListener("click", () => {
    circle.classList.toggle("move");
    for(let i = 0; i <= darkEl1.length-1; i++){
        darkEl1[i].classList.toggle("dark-1");
    }
    for(let i = 0; i <= darkEl2.length-1; i++){
        darkEl2[i].classList.toggle("dark-2");
    }

    for(let i = 0; i <= lightEls.length-1; i++){
        lightEls[i].classList.toggle("light");
    }

    for(let i = 0; i <= border.length-1; i++){
        border[i].classList.toggle("border-color");
    }
})


