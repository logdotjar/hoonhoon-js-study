const todoInput = document.querySelector("#todo-input");

const keyCodeCheck = function () {
    //input박스에 값을 입력하고 enter누르면 값이 입력되도록 keyKode : 13을 입력했을 때 이벤트 실
    if(window.event.keyCode === 13 && todoInput.value !== ""){
        const todoList = document.querySelector("#todo-list");

        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");

       newSpan.textContent = todoInput.value;
       // span을 li태그 안에 위치하도록
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        // 재할당이 필요한 변수이기때문에 let으로 선언해야함.
        todoInput.value = "";
    }
};