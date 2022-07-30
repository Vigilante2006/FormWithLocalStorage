const register = document.getElementById("btn");

const naam = document.getElementById("name");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

const getInfo = document.getElementById("getInfo");

const naam1 = document.getElementById("naam1");
const phoneNum = document.getElementById("phoneNum");
const eMail = document.getElementById("eMail");
const passWord = document.getElementById("passWord");

const clearInfo = document.getElementById("clearInfo");

register.addEventListener(
  "click",
  (add = () => {
    console.log("Clicked");
    window.localStorage.setItem("localnaam", naam.value);
    window.localStorage.setItem("localphone", phoneNumber.value);
    window.localStorage.setItem("localemail", email.value);
    window.localStorage.setItem("localpass", pass.value);
  })
);
getInfo.addEventListener(
  "click",
  (getVal = () => {
    console.log("InfoClicked");
    naam1.innerText = window.localStorage.getItem("localnaam");
    phoneNum.innerText = window.localStorage.getItem("localphone");
    eMail.innerText = window.localStorage.getItem("localemail");
    passWord.innerText = window.localStorage.getItem("localpass");
  })
);
clearInfo.addEventListener(
  "click",
  (clearVal = () => {
    console.log("clearClicked");
    window.localStorage.clear();
    naam1.innerText = " ";
    phoneNum.innerText = " ";
    eMail.innerText = " ";
    passWord.innerText = " ";
  })
);

//Prevent from inspection

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
