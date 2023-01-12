# 데이터 통신
**API**<br>
어떤 프로그램에서 제공하는 기능을 사용자가 활용할 수 있도록 만들어 둔 인터페이스<br>
**HTTP** : Hypertext Transfer Protocol<br>
서버와 클라이언트가 통신하기 위해 정의된 규약<br>
사용자 -> 서버로 전달되는 데이터 <br>
1. 헤더: GET , 어떤 경로로 요청하는지, 몇버전의 프로토콜 사용하는지, Host요청하는 서버의 주소 등 
2. 요청 바디 Request body

서버 -> 사용자로 응답되는 데이터 <br>
1. 응답 헤더
2. 응답 바디 Response Body

- GET : 서버의 데이터를 조회하는 Method
- POST : 서버의 데이터를 등록하는 Method 
- PUT : 서버내  데이터를 수정하는 Method
- PATCH : 데이터 일부를 수정하는 Method
- DELETE : 서버의 데이터를 삭제하는 Method
- OPTIONS : 서버가 허용하는 Method 를 확인하기 위한 Method
**동기,비동기**<br>
- 동기 : 서버 요청을 보냈을때 응답을 받아야 다음 동작 수행 가능한 것.
- 비동기 : 서버 요청을 보냈을때 응답을 받는 여부 상관없이 다음 동작을 수행하는 것이
자바스크립트는 동기 / 비동기 작업이 가능하다.<br>
**자료구조 stack, queue**<br>
- stack : 후입선출
- queue : 선입선출
자바스크립트 실행환경에서도 stack,queue가 적용된다.
- call stack : 자바스크립트 함수는 call stack 쌓이는 형식으로 쌓이고 후입선출의 형식으로 실행된다.
- callback queue : 스택이 비워지면 그때서야 callback que에 있던 함수들이 call-stack으로 들어가게된다. 비동기 하뭇들이 callback que에 들어간다!

**Promise 객체**<br>
Promise의 3가지 상태<br>
1. fulfilled : 요청이 성공한 상태
2. pending : 요청에 대한 응답을 기다리고 있는 상태
3. rejected : 요청이 실패한 상태 