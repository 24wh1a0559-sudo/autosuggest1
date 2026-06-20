//alert("Hello from js !");

//console.log("hello from js");
const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const gender = document.getElementById("gender");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {

    if (gender.textContent === "Male") {
        userImg.src = "../images/jane.png";
        userName.textContent = "Jane Doe";
        gender.textContent = "Female";
    } else {
        userImg.src = "../images/john.png";
        userName.textContent = "John Doe";
        gender.textContent = "Male";
    }

});
