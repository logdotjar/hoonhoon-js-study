//전역 스코프로 존재하는 변수
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// JSON.parse = 문자열데이터를 원본데이터 형태로 바꿔줌
const savedTodoList = JSON.parse(localStorage.getItem('saved-items'));



const createTodo = function (storageData) {
    let todoContents = todoInput.value;
    if(storageData){
        todoContents = storageData.contents;
    }

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click",() => {
       newLi.classList.toggle("complete");
       saveItemsFn();
    });

    //버튼 클릭 뿐만아니라 할일 목록 더블클릭시 complete
    newLi.addEventListener("dblclick",()=>{
        newLi.remove();
    });

    // 새로고침하더라도 컴플리트 리스트가 유지되어야함
    //true로 떨어지기때문에 if문 실행
    // storageData.complete ==> undefined으로 떨어짐 -> optional chaining사용한다.
    //optional chaining은 객체가 undefined이거나 다른 값인경우에는 complete를 찾지않는다.
    if(storageData?.complete){ //optional chaining
        newLi.classList.add("complete");
    }

    // or optional chaining이 없을 경우 로직
    /*
    if(storageData && storageData.complete){
        newLi.classList.add("complete");
    }
   */


    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    // span을 li태그 안에 위치하도록
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    // 재할당이 필요한 변수이기때문에 let으로 선언해야함.
    todoInput.value = "";
    saveItemsFn();
}

const keyCodeCheck = function () {
    //input박스에 값을 입력하고 enter누르면 값이 입력되도록 keyKode : 13을 입력했을 때 이벤트 실
    if(window.event.keyCode === 13 && todoInput.value !== ""){
        createTodo();
    }
};

const deleteAll = function () {
    // liList nodeList 배열로 반환됨
    const liList = document.querySelectorAll("li");
    //노드리스트 접근해서 각 인덱스값 가져오기 위한 반복문
    for(let i = 0; i < liList.length; i++){
        liList[i].remove();
    }
    saveItemsFn();
}

const saveItemsFn = function () {
    const saveItems = [];
    //
    for(let i = 0; i < todoList.children.length; i++){
        const todoObj = {
            contents : todoList.children[i].querySelector("span").textContent,
            complete:todoList.children[i].classList.contains('complete'),
        }
        saveItems.push(todoObj);
    }
    //로컬 스토리지는 문자열만 저장 가능! 배열은 문자열로 변환이 불가하다.
    //객체나 배열 자체를 문자열로 변환해줄 수 있는 JSON 데이터 포맷 사용하기
    console.log(typeof  JSON.stringify(saveItems));


    /*
    // 이코드 개선 -> 삼항연산자
    if(saveItems.length === 0){
        // 아이템이 없는 경우
        localStorage.removeItem('saved-items');
    } else{
        // 정상적으로 데이터가 담겼을때
        localStorage.setItem('save-items',JSON.stringify(saveItems));
    }
     */

    //위 조건을 삼항연산자로 로직 줄임
    saveItems.length === 0 ? localStorage.removeItem('saved-items') : localStorage.setItem('save-items',JSON.stringify(saveItems));



}

// 호이스팅 문제로 맨 하위로 선언
if(savedTodoList){
    for(let i = 0; i < savedTodoList.length; i++){
        createTodo(savedTodoList[i]);
    }
}