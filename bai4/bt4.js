const formEmail = document.querySelector("#form");
const inputUser = document.querySelector("#email");
const btnCheck = document.querySelector("#btn-check");
const errorEmail = document.querySelector("#error");
let inputValue;
function checkIsEmpty(field) {
    if (field === "" || field === null || field === undefined) {
        return true;
    }
    return false;
}
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

    return emailRegex.test(email);
    
}
inputUser.addEventListener("input", function (event) {
    inputValue = event.target.value;
    if (checkIsEmpty(inputValue)) {
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        errorEmail.textContent = "Không được để trống";
        
   }
   if (!validateEmail(inputValue)) {
        errorEmail.style.display = "block"
        errorEmail.style.color = "red";
        errorEmail.textContent = "Email không hợp lệ";
   }else {
        errorEmail.style.display ="none";
   }
        console.log(event.target.value);
   
   
});

formEmail.addEventListener("submit", function (event) {
   event.preventDefault();
   inputValue = inputUser.value.trim();

   if (checkIsEmpty(inputValue)) {
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        errorEmail.textContent = "Không được để trống";
   }

   if (!validateEmail(inputValue)) {
        errorEmail.style.display = "block"
        errorEmail.style.color = "red";
        errorEmail.textContent = "Email không hợp lệ";
   }else {
        errorEmail.style.display = "block";
        errorEmail.style.color = "green";
        errorEmail.textContent = "Email hợp lệ";
   }
   inputUser.value ="";
});