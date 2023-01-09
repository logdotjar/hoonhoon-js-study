// JS가 실행되면서 바로 실행될 명령어
const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-deay-container");
const intervalIdArr = [];

//로컬 스토리지에서 데이터 다시 가져오기 - key
const savedDate = localStorage.getItem('saved-data');

messageContainer.innerHTML = '<h3>D-day를 입력해주세요.</h3>';




const dateFormMaker = function () {
    const inputYear = document.querySelector('#target-year-input').value();
    const inputMonth = document.querySelector('#target-month-input').value();
    const inputDate = document.querySelector('#target-date-input').value();
    const dateFormat = `${inputYear} - ${inputMonth} - ${inputDate}`;
    return dateFormat;
    // console.log(inputYear , inputMonth , inputDate);
}
const countMaker = function (data) {
    if(data !== savedDate){
        //새로고침해도 카운트가 유지될 수 있도록 비휘발성 메모리 local storage에 저장
        //입력되어있는 데이터와 새로운 데이터 다르다면 새로운 데이터를 저장한다.
        localStorage.setItem('saved-date',data);
    }

    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0,0,0,0);
    const remaining = (targetDate - nowDate) / 1000;
    //remaining이 0이라면, 타이머가 종료되었습니다 출력
    if(remaining <= 0){
        // console.log("타이머가 종료되었습니다.");
        messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
        messageContainer.style.display = "flex";
        setClearInterval();
        return;
    }else if(isNaN(remaining)){
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력
        // NaN일경우 체크할때는 isNaN을 사용
        // console.log("유효한 시간대가 아닙니다.");
        container.style.display="none";
        messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
        messageContainer.style.display="flex";
        setClearInterval();
        return;
    }


    /*
    const remainingDate = Math.floor(remaining / 3600 / 24);
    const remainingHours = Math.floor(remaining / 3600) % 24;
    const remainingMin = Math.floor(remaining / 60) % 60;
    const remainingSec = Math.floor(remaining) % 60;
     */

    //각 변수명을  key로하는 프로퍼티를 생성해줌.
    const remainingObj = {
        remainingDate:Math.floor(remaining / 3600 / 24),
        remainingHours: Math.floor(remaining / 3600) % 24,
        remainingMin: Math.floor(remaining / 60) % 60,
        remainingSec : Math.floor(remaining) % 60
    }



    const documentObj = {
        days : document.getElementById("days"),
        hours : document.getElementById("hours"),
        min : document.getElementById("min"),
        sec : document.getElementById("sec"),
    }

    const documentArr = ['days','hours','min','sec'];

    const timeKeys = Object.keys(remainingObj);
    // const docKeys = Object.keys(documentObj);


    const format = function (time) {
        if(time<10){
            // 한자리 숫자를 두자리로 동일하게 표기
            return "0" + time;
        } else{
            // 두자리 수일때 그대로 반환
            return time;
        }
    }

    let i = 0;
    for(let tag of documentArr){
        const remainingTime = format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingTime;
        i++;
    }

    /*
    let i = 0;
    for(let key in documentObj){
        documentObj[key].textContent = remainingObj[timeKeys]
        i++;
    }

     */


    /*
    documentObj['days'].textContent = remainingObj['remainingDate'];
    documentObj['hours'].textContent = remainingObj['remainingHours'];
    documentObj['min'].textContent = remainingObj['remainingMin'];
    documentObj['sec'].textContent = remainingObj['remainingSec'];

    // 이 4줄이 해주던 일을 for문으로 정리함
     */

    /*
    for(let i = 0; i < timeKeys.length; i = i + 1){
        documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    }
     */







    console.log(remainingDate,remainingHours,remainingMin,remainingSec);
};


const starter = function(targetDateInput){

    // falsy한 값 undefined의 부정
    if(!targetDateInput){
        //매개변수 재할당 가능
        targetDateInput = dateFormMaker();
    }

    // const targetDateInput = dateFormMaker();


    container.style.display = "flex";
    messageContainer.style.display = "none";
    setClearInterval(); // 기존에 존재하던 데이터 clear 후 새롭게 D-day 카운트
    //1초 기다리기전에 먼저 함수 실행
    countMaker(targetDateInput);
    //함수내부에서 실행해주고자 할때 setinterval내에서 함수실행
    const intervalId = setInterval(()=> {
        countMaker(targetDateInput)
    },1000);
    // for(let i = 0; i <100; i++){
    //     setTimeout(countMaker,1000 * i);
    // }
    intervalIdArr.push(intervalId);
}

const setClearInterval = function (){
    localStorage.removeItem('saved-date');
    for(let i = 0; i < intervalIdArr.length; i++){
        clearInterval(intervalIdArr[i])
    }
}

const resetTimer = function () {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>"
    messageContainer.style.display = "none";
    setClearInterval();
}

// storage에 저장되어있는지 체크
// 조건 truthy하기 떄문에 조건식 성립
if (savedDate){
    starter(savedDate);
} else {
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>"
}
