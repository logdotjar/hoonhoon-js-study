### 배열 Array
*순서가 존재하는 여러개의 데이터를 관리해야할때 배열을 활용해야 한다.* <br>
**배열** : 순서가 있는 데이터 컬렉션을 저장할 때 사용, 데이터 컬렉션이 논리적으로 정의된 규칙에 의해 나열된 것<br>
["데이터","데이터","데이터"]<br>

배열을 변수에 할당 
```
let ranking = ["jason","alice","chris","janem","tom"];
```

**배열의 특징**<br>
요소(element) : 각 요소는 유니크 위치값(index)을 가지고 있다.  0부터 시작하며 +1씩 증가.<br>
배열의 요소는 Index를 통해 각 요소에 접근이 가능하다.<br>
배열 요소 인덱스 접근방법
```
배열이름[찾고자하는 요소 인덱스 넘버]
ranking[0] -> "json"
```

***Property*** <br>
<u>데이터 타입마다 가지고 있는 고유한 속성들</u>
길이(length) => 배열 내 요소의 개수
```
let ranking = ["jason","alice","chris","janem","tom"];
console.log(ranking.length); // 5
```
*주의*<br>
배열의 index와 length의 시작 숫자는 다르다!<br>
ranking의 Index 시작 : 0, <br>
ranking의 Length 시작 : 1<br>


***Method*** <br>
*어떤 기능을 가지고 있는 명령어* <br>
**배열의 Method**<br>
- push()
- pop()
- indexOf()
- includes()

**push()** : 배열의 가장 뒤에 데이터를 추가<br>

```
Array.push()
let ranking = ["jason","alice","chris"];

ranking.push("jane") // 추가하고자 하는 데이터 추가 
console.log(ranking); // ["jason","alice","chris","jane"]
```

**pop()** : 배열의 가장 끝에 있는 데이터를 제거<br>
데이터 삭제 시, 소괄호 안에 별도의 데이터 입력은 필요 없음!
```
Array.pop()
let ranking = ["jason","alice","chris"];

ranking.pop() // 소괄호 안에 별도의 데이터 입력은 필요 없음!
console.log(ranking); // ["jason","alice"]
```

**includes** : 특정 배열에 주어진 데이터가 존재하는지 여부 확인, 여부에 따라 참(true),거짓(false)로 반환<br>
```
Array.includes()
let ranking = ["jason","alice","chris"];

ranking.includes("jason") // true
```

**indexOf** : 특정 배열에서 주어진 데이터의 index값을 찾아 반환 
```
Array.indexOf()
let ranking = ["jason","alice","chris"];

ranking.indexOf("jason") // 0
```

### 객체 Object
객체란 여러개의 프로퍼티(속성)를 갖는 데이터 타입이다. <br>
- Property는 Key:Value 한쌍을 이룬다. <br>
- key와 value는 :(콜론)으로 구분된다. <br>
- Property는 콤마로 구분한다.

**객체를 정의하는 방법**
```
- 중괄호 
- 각각 프로퍼티를 담는다. 
- 변수명을 정해 변수에 담는다.

let userData = {
    name : "Jason",
    age : 24,
    gender : "Male"
}
```
**객체에 접근하는 방법**
- Dot notation : 객체.접근할Property Key / 객체.추가할PropertyKey = "데이터"
```
let userData = {
    name : "Jason",
    age : 24,
    gender : "Male"
}

userData.name // "Jason"

<새로운 property를 추가할때>
userData.email = "jason@mail.com"

let userData = {
    name : "Jason",
    age : 24,
    gender : "Male",
    email: "json@mail.com"
}

```
 
- Bracket notation : 객체["접근할Property"] / 객체["추가할Property"]="데이터" <br>
🔥주의! 대괄호 내 Key는 문자열로 입력해한다.<br>
  문자열이 아닌 Key를 입력하면 변수로 인식한다.
```
let userData = {
    name : "Jason",
    age : 24,
    gender : "Male"
}

userData["age"] // 24
```

***객체 Method*** <br>
- Object.keys()
- Object.values()

**Object.keys()** : 주어진 객체의 key만을 가져와서 배열에 담아주는 메소드, 주어진 객체의 키들은 문자열 형태로 담긴다.<br>
Object.keys(객체)
```
let userData = {
    name : "Jason",
    age : 24,
    gender : "Male"
}
Object.keys(userData) // ["name","age","gender"]


let jsonDataKeys = Object.keys(userData)
jsonDataKeys.includes("name") // 객체의 key들을 담은 배열에 name이 존재하는지 체크
```

**Object.values()** : 주어진 객체의 value만을 가져와서 배열에 담아주는 메소드<br>
Object.values(객체)
```
let userData = {
    name : "Jason",
    age : 24,
    gender : "Male"
}
Object.values(userData) // ["Json","24","Male"]
```