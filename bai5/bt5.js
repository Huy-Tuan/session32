const formQuestion = document.querySelector("#form");
const addQuest = document.querySelector("#add-questions");
const inputUser = document.querySelector("#add-question");
const btnAdd = document.querySelector("#add");
const listQuestion = document.querySelector("#list-questions");
const errorQuestion = document.querySelector("#error");
let inputValue;

let questions = [];

function renderQuestion() {
    listQuestion.innerHTML ="";
    questions.forEach((question) => {
        const liElement = document.createElement("li");
        liElement.style.listStyle = "none";
        liElement.textContent = question.name;
        listQuestion.appendChild(liElement);

    const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.cursor = "pointer";

        deleteBtn.addEventListener("click", function () {
            const isConfirmed = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?");
            if(isConfirmed){
                const index = questions.findIndex(i => i.id === question.id);
                if (index !== -1) {
                    questions.splice(index, 1);
                    renderQuestion();
                }
                
            }
                
        });
        liElement.appendChild(deleteBtn);

    });
}

// Lấy giá trị ô input
inputUser.addEventListener("input", function (event) {
   if (!event.target.value) {
        errorQuestion.style.display = "block";
        errorQuestion.textContent = "Tên nhiệm vụ không được để trống";

   }else {
    errorQuestion.style.display = "none";
    inputValue = event.target.value;
   } 
   console.log(event.target.value);
   
});

formQuestion.addEventListener("submit", function (event) {
    event.preventDefault();
    inputValue = inputUser.value.trim();

    if (inputValue) {
        const newQuest = {
            id: Math.ceil(Math.random() * 10000),
            name: inputValue,
            status: false,
        };

        questions.push(newQuest);

        inputUser.value ="";

        renderQuestion();

        alert("Thêm nhiệm vụ thành công");
    }
});
