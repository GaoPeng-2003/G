// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
//匿名函数 
document.querySelector("img").addEventListener("click", () => {
    alert("欢迎QQ扫码加群喵--不忘初心，牢记使命");
  });
//图像切换

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/入群二维码.png") {
    myImage.setAttribute("src", "images/跟党走.jpeg");
  } else {
    myImage.setAttribute("src", "images/入群二维码.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("pp");
function setUserName() {
    let myName = prompt("请输入你的名字：");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎你新成员，" + myName+"!";
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎老朋友，" + storedName+"!";
  }
  myButton.onclick = function () {
    setUserName();
  };
  
  