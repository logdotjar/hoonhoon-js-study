// JS가 실행되면서 바로 실행될 명령어
const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-deay-container");
const intervalIdArr = [];

messageContainer.innerHTML = '<h3>D-day를 입력해주세요.</h3>';


const dateFormMaker = function () {
    const inputYear = document.querySelector('#target-year-input').value();
    const inputMonth = document.querySelector('#target-month-input').value();
    const inputDate = document.querySelector('#target-date-input').value();
    const dateFormat = `${inputYear} - ${inputMonth} - ${inputDate}`;
    return dateFormat;
    // console.log(inputYear , inputMonth , inputDate);
}
const countMaker = function () {

    const nowDate = new Date();
    const targetDate = new Date('2023-12-25');
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


    let i = 0;
    for(let tag of documentArr){
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
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


const starter = function(){
    container.style.display = "flex";
    messageContainer.style.display = "none";
    //1초 기다리기전에 먼저 함수 실행
    countMaker();
    const intervalId = setInterval(countMaker,1000);
    // for(let i = 0; i <100; i++){
    //     setTimeout(countMaker,1000 * i);
    // }
    intervalIdArr.push(intervalId);
}

const setClearInterval = function (){
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>D-day를 입력해주세요.</h3>"
    messageContainer.style.display = "none";
    for(let i = 0; i < intervalIdArr.length; i++){
        clearInterval(intervalIdArr[i])
    }

}