# 스코프와 호이스팅
**Scope** : 변수 참조의 유효범위 <br>
- 전역 스코프 global scope
- 지역 스코프 local scope : 함수 레벨 스코프 , 블록 레벨 스코프
**함수 레벨 스코프**<br>
  var : 함수레벨 스코프를 따른다. 선언된 함수 내부의 스코프를 말함<br>
  let : 함수레벨 스코프 따름<br>
```
const sum = function(){
    var x = 0;
}
console.log(x) //

```

**블록 레벨 스코프**<br>
var : var로 선언된 변수는 블록 레벨 스코프를 따르지 않음<br>
let : 블록 레벨 스코프를 따름<br>
```
if(){
 var y = 0;
}
console.log(y) 



var i = 0;
for(var i = 0; i < 10; i ++}{
    console.log(i)
}
console.log(i)
```

위에서 선언한 var가 for문의 var i = 0 으로 재선언 된다.<br>
for문 내에서는 정상 출력된다.<br>
반복문 바깥의 콘솔로그에서는 for문의 숫자가 담겨나온다.<br>

**호이스팅**<br>
var : 변수 선언 이전에 호출시 선언부를 위쪽으로 올라가기때문에 undefined

***함수의 호이스팅***<br>
함수표현식 : 호이스팅이 발생하지않음<br>
함수선언식 : 호이스팅이 발생함
```
fn1()
function fn1(){
    console.log("hoisting occurred");
}


const fun2 = function() {
    console.log("error occurred");
}
```

**TDZ(Temporal Dead Zone)**<br>
TDZ : 변수에 할당할 메모리가 부여되기 전 단계<br>

**let / const / 함수 표현식** <br>
변수선언,데이터 할당 단계 : 
1.선언단계 -> 2.초기화단계 -> 3.할당단계<br>

1.선언한 변수를 식별자가 담기는 객체에 할당하는 단계 
2.변수에 할당할 메모리 공간을 부여하는단계
3.정의된 변수에 데이터가 할당되는 단계

선언단계와 초기화 단계 사이 TDZ 발생<br>

let,const 선언단계와 초기화 단계가 분리가 된다. 선언이 되었더라고 메모리가 할당되기 전 참조를 하면 TDZ에 있는 것이다.<br>


**var / 함수선언식**<br>
선언됨과 동시에 초기화가 진행되기때문에 TDZ가 존재할 수 없음<br>
데이터는 없으나 메모리에는 할당되어 있는 상태이다.
var : 1.선언단계,초기화단계 -> 2.할당단계<br>
함수선언식 : 선언단계+초기화단계+할당단계 모두 붙어있기 때문에 선언되기 이전에 호출시 함수가 실행되는 것이다.
