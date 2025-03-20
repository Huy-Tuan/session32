const formAddSubject = document.querySelector("#form");
const inputUser = document.querySelector("#name");
const addSubject = document.querySelector("#add");
const listSubject = document.querySelector("#list-subject");
const errorElement = document.querySelector("#error");
let inputValue;
let subjects = [];

function renderSubject() {
    listSubject.innerHTML ="";
    subjects.forEach((subject) => {
        const liElement = document.createElement("li");
        liElement.textContent = subject.name;
        listSubject.appendChild(liElement);
    });
}

// Lấy giá trị trong ô input
inputUser.addEventListener("input", function (event) {
    if (!event.target.value) {
        errorElement.style.display ="block";

        errorElement.textContent = "Tên môn học không được để trống";

    }else {
        errorElement.style.display ="none";
        inputValue = event.target.value;
    }
    console.log(event.target.value);
    
});

//submit form

formAddSubject.addEventListener("submit", function (event) {
    event.preventDefault();

    inputValue = inputUser.value.trim();
    if (inputValue){
        const newSubject = {
            id: Math.ceil(Math.random() * 10000),
            name: inputValue,
            status: false,
        };

        subjects.push(newSubject);

        inputUser.value = "";

        renderSubject();

        alert("Thêm công việc thành công");
    }
});