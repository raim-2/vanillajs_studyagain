import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Vanilla study again</h1>
`;
//배열 array
//이름과 인덱스로 참조되는 정렬된 값의 잡합
//각각의 값 - 배열 요소(element), 위치 나타내는 숫자 -인덱스(index)
//배열 선언은 [] 안에 감싼다.

//배열 형태
let array = [1, 2, 3];

//객체배열의 형태
let objects = [
  { name: '멍멍이', age: 10 },
  { name: '야옹이', age: 5 }
];

//추가
objects.push({ name: '멍뭉이', age: 11 });
console.log(objects, objects[0].name);

//순회

for (let i = 0; i < objects.length; i++) {
  console.log(objects[i].name);
}

//1. 배열의 선언

/*
var arr = [배열요소1, 요소2,...] //-배열 리터럴 이용
var arr = Array(배열요소1, 요소2,...)  //Array 객체 생성자 이용
var arr= new Array(배열요소1,요소2...) //new 연산자 이용해 Array 객체생성
*/

var arr = [];
var arr2 = Array(1, 2);
var arr3 = new Array(); //사용 안하는 게 좋음

//왜 사용안하는 게 좋은지?
var arr3 = new Array(3);
console.log(`new Array(3)로 초기화시 빈공간이 3개 생김 ${arr3}`);
var arr3 = new Array('3');
console.log(`new Array('3')로 초기화시 3이 요소로 생김 ${arr3}`);

arr3[0] = 1;
console.log(arr3);

//2. 배열 참조
//배열 요소를 참조하고 싶을 땐 []연산자사용
//배열 요소의 개수는 배열의 길이 - length 프로퍼티에 자동갱신
//배열의 인덱스는 항상 0부터 시작한다.
//배열이름[인덱스]

arr[0] = 3;
//3. 배열 요소 추가
/*
1. arr.push(추가할 요소);  // push() 메소드를 이용하는 방법
2. arr[arr.length] = 추가할 요소; // length 프로퍼티를 이용하는 방법
3. arr[특정인덱스] = 추가할 요소; // 특정 인덱스를 지정하여 추가하는 방법
*/

arr.push(2);
arr[arr.length] = 5;

//배열의 크기 = 길이
console.log(`배열의 길이는 ${arr.length}`);
console.log(`배열 추가됨 ${arr[1]}, ${arr[2]}`);

//배열 요소가 없는 부분은 배열의 홀이라 한다.
//홀을 참조시 undefined를 반환한다.
console.log(
  `배열 참조 ${arr[0]}, ${arr2[0]}, ${arr3[0]}, 홀 참조시 ${arr3[5]} `
);

//4. 배열 순회
//배열 요소에 차례대로 접근하고 싶으면 for문과 같은 반복문 사용 가능

arr = [1, 2, 3, 4, 5];
var result = '<ul style="color:red">';
for (let idx in arr) {
  result += '<li>' + arr[idx] + '</li>';
}

result += '</ul>';
document.write(result);

//5. Array 객체
//배열은 정렬된 값들의 집합으로, Array객체로 다뤄진다.
//-> 배열 작업하기 좋은 다양한 메소드가 제공됨.

//6. 희소 배열
//배열이 속한 요소의 위치가 연속적이지 않은 배열
//-> 배열의 길이보다 배열 요소의 개수가 적다.
var arr4 = new Array();
arr4[99] = 'JavaScript'; // 배열 arr의 100번째 위치에 문자열을 삽입함.
// 100번째 요소를 삽입했기 때문에 배열의 길이는 100으로 늘어남.
document.write('배열의 길이는 ' + arr4.length + '입니다.<br>');

//7. 다차원 배열
//배열요소가 또 다른 배열인 배열
var arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = new Array();
  for (var j = 0; j < 4; j++) {
    arr[i][j] = `[${i},${j}]`;
    //2차원 배열의 배열 요소는 [] 연산자를 두 번 사용하여 참조할 수 있다.
    document.write(arr[i][j] + '<br>');
  }
}

//문자열을 배열처럼 접근하기
//문자열은 배열과 같이 []연산자를 사용해 문자열을 구성하는 각 문자에 접근 가능하다.
//또한, Array 객체가 제공하는 메소드도 사용 가능하다.

let str = '안녕하세요';
let str2 = '오늘, 기분이 좋다';

document.write(
  '문자열은 배열처럼 접근할 수 있다. 인덱스 2번은 ' + str.charAt(1) + `<br>`
); //녕
//charAt() 문자열을 원시 래퍼 객체로 변환 후 문자열 메서드를 사용함함

//string.split()
/* 그러나, IE 7과 그 이전버전에선 동작 X
-> 바로 배열처럼 사용하지 말고 split() 메소드 이용해
먼저 배열로 변환 후 사용하는 것이 좋다. */
//split()은 string객체를 지정한 구분자를 이용해 여러개 문자열로 나눈다.

/* string.split(separator, limit) 
sperator : 문자열 잘라줄 구분자 
limit : 최대 분할 개수
*/

let strArr = str.split();
//파라미터에 아무것도 전달 안할 때는 문자열 전체를 배열에 담아 전달한다.
let strArr2 = str.split('');
//문자열을 각각의 문자별로 잘라서 한글자씩 배열에 담아줌
//띄어쓰기도 포함한다.
let strArr3 = str2.split(' ');
//공백을 지정 -> 단어별로 잘라서 배열에 담아줌
let strArr4 = str2.split(',');
//특정 구분자로 자르기기
let strArr5 = str2.split(',', 1);

console.log(strArr); //['안녕하세요.']
console.log(strArr2); //["안", "녕", "하", "세", "요"]
console.log(strArr3);
//["오늘", "기분이", "좋다"]
console.log(strArr4); //["오늘", " 기분이 좋다"]
console.log(strArr5); //["오늘"]

//변수가 배열인지 여부 확인하는 방법
//1. Array.isArray(); //*es5
//2. instanceof 연산자
// 특정 객체가 어떤 클래스 또는 생성자 함수의 인스턴스인지 여부를 확인하는 데 사용
/* 판별객체 instanceof constuctor */
//3. constructor 프로퍼티

str = String('안녕'); //String 함수 사용
//매개변수로 전달받은 값 문자열로 변환 후 문자열 원시값 반환
str2 = new String('안녕'); //new 생성자를 사용
//매개변수로 전달받은 값을 감싸는 String 객체를 생성
console.log(typeof str, typeof str2); //string, object

console.log(Array.isArray(strArr4)); //true
console.log(Array.isArray('안녕')); //false
console.log(strArr4 instanceof Array); //true
console.log('안녕' instanceof String); //원시값이므로 false
console.log(typeof str, str instanceof String);

arr = [1, 2, 3];
console.log(arr.constructor);

//함수 function
//함수도 하나의 데이터 타입이다.
//특정 코드를 하나의 명령으로 실행할 수 있게 해준다.
//해당 목적의 작업을 수행하도록 설계된 독립적 블록
//필요시마다 호출해 작업을 반복할 수 있다.
//호출 전까지는 실행되지 x

var a = 1,
  b = 2;
let sum = a + b;
document.write(sum); //3

//함수를 만들 때는 function키워드를 사용해야 한다.
//어떤 값을 받아올 지 정하는데 이를 파라미터(매개변수)라 한다.
//-> 인수로 전달된 값을 함수 내부에서 사용할 수 있게(내부로 전달) 해주는 변수
/* function 함수명 (매개변수1, 매개변수2,....) {
  코드 블록 - 실행문
} 

호출하는 법은 함수명();
인수를 담아서 호출할 수도 있다. 함수명(인수1, 인수2..);
인수(함수 호출 시 함수로 값을 전달해주는 값)
*/

function add(a, b) {
  //a,b는 매개변수
  return a + b; //반환문
  //return 키워드를 사용하면 함수의 결과물을 출력할 수 있다.
  //return을 하면, 함수는 끝나므로 뒤에 나오는 코드는 호출이 되지 않는다.
  console.log('return 뒤에는 호출 안되요!');
}

sum = add(1, 2); //인수로 1,2 전달
console.log(sum); //3 출력

//함수는 문법적 구문일뿐만 아니라 값이기도 하다.
//함수가 변수에 대입될 수도 있고, 다른 함수 인수로 전달될 수도 있다.
// -> 다른 함수에 인수로 전달되는 함수는 콜백함수라 함

function sqr(x) {
  return x * x;
}

var sqrNum = sqr; //변수sqrNum에 함수sqr 대입
document.write('<br>' + sqr(4));
document.write('<br>' + sqrNum(4));

//파라미터 사용해보기 -연습
//함수를 정의할 때 매개변수의 타입을 따로 명시하지 않는다.
//함수를 호출할 때도 인수로 전달된 값의 타입검사 역시 하지 않는다.
//만약 함수 정의보다 적은 인수가 전달되면, 오류 발생 x, 대신 전달되지 않은 매개변수에 undefined 값을 설정
function hello(name) {
  console.log('hello ' + name + '!');
}

hello('min'); //hello min!

//매개변수에 인수 전달
function addNum(x, y, z) {
  console.log(x, y, z);
  //1,2,3 전달
  //1,2,undefined 전달
  //1,undefined,undefined 전달
  //undefined,undefined,undefined 전달
  return x + y + z;
}

console.log(addNum(1, 2, 3)); //6
console.log(addNum(1, 2)); //NaN
console.log(addNum(1)); //NaN
console.log(addNum()); //NaN
//전달되지 않은 매개변수는 undefined로 자동 설정되어
//-> 계산하지 못하므로 NaN이 뜬다.

function addNum2(x, y, z) {
  if (x === undefined)
    // 함수 호출시 x에 해당하는 인수가 전달되지 않은 경우
    x = 0; // 변수 x의 값을 undefined에서 0으로 변경함.
  if (y === undefined)
    // 함수 호출시 y에 해당하는 인수가 전달되지 않은 경우
    y = 0; // 변수 y의 값을 undefined에서 0으로 변경함.
  if (z === undefined)
    // 함수 호출시 z에 해당하는 인수가 전달되지 않은 경우
    z = 0; // 변수 z의 값을 undefined에서 0으로 변경함.
  return x + y + z;
}

console.log(addNum2(1, 2, 3)); // 6
console.log(addNum2(1, 2)); // 3
console.log(addNum2(1)); // 1
console.log(addNum2()); // 0

//arguments 객체
//함수 정의보다 더 많은 인수가 전달되면, 매개변수에 대입되지 못한 인수를 참조할 방법 x
//-> 이 때 arguments 객체를 이용하면 인수의 총 개수를 확인하거나, 인수에 바로 접근 가능
//-> 이 객체는 함수가 호출될 때 전달된 인수를 배열 형태로 저장하고 있기 때문

function addNum3() {
  let sum = 0;
  console.log(arguments);
  //{0: 1, 1: 2, 2: 3}
  //{0: 1, 1: 2}
  //{0: 1}
  //{}
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addNum3(1, 2, 3)); //6
console.log(addNum3(1, 2)); //3
console.log(addNum3(1)); //1
console.log(addNum3()); //0

//*es6 디폴트 매개변수와 나머지 매개변수
//IE를 제외한 최신 브라우저에서는 지원O

//1. 디폴트 매개변수
//함수 호출 시 정의된 인수를 전달하지 않을 경우 사용할 기본값

function mul(a, b = 1) {
  // 인수가 한 개만 전달되면 나머지 매개변수의 값을 언제나 1로 설정해 줌.
  return a * b;
}

mul(3, 4); // 12
mul(3); // 3

//2. 나머지 매개변수(rest parameter)
//생략 접두사 ... 을 사용해 특정 위치의 인수부터 마지막 인수까지 한번에 지정 가능
function sub1() {
  var firstNum = arguments[0]; //첫 번째 인수
  console.log(firstNum);
  for (var i = 0; i < arguments.length - 1; i++) {
    // 두 번째부터 마지막 인수까지를
    firstNum -= arguments[i + 1]; // 뺌.
    console.log(firstNum);
  }
  return firstNum;
}

sub1(10, 2, 3); // 10 - 2 - 3 = 5
sub1(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

//나머지 매개변수 사용시
//첫번째 인수는 firstNum에
//나머지 인수는 배열 restArgs에 저장
function sub3(firstNum, ...restArgs) {
  console.log(firstNum + ' 나머지는 배열로');
  console.log(...restArgs); //{2,3} {1,5,8}
  for (var i = 0; i < restArgs.length; i++) {
    firstNum -= restArgs[i];
  }
  return firstNum;
}

sub3(10, 2, 3); // 10 - 2 - 3 = 5
sub3(10, 1, 5, 8); // 10 - 1 - 5 - 8 = -4

//*es6 템플릿 리터럴 사용해보기
//문자열 조합시 + 사용하는데, 이 대신 사용할 수 있다.
// `` 백틱을 사용
// 변수를 사용하고 싶을 때는 ${변수명}

function hello2(name) {
  console.log(`hello ${name}!`);
}

hello2('kim'); //hello kim!

//*es6 화살표 함수
//함수를 선언하는 방식 중 하나
//function대신 => 문자 사용해서 함수 구현한다.
// let 함수명 = (파라미터) => {코드블록}

add = (a, b) => {
  return a + b;
};

console.log(add(1, 2)); //3

//바로 리턴하는 경우에는 아래와 같이 줄여쓸 수 있다.
add = (a, b) => a + b;
console.log(add(1, 3)); //4

/* 일반 function함수의 this와 화살표 함수의 this는 다르다*/
// *function으로 만든 함수의 this
//-> 함수를 호출한 객체를 참조한다.
//함수가 호출될 때 호출한 객체에 의해 동적으로 결정된다.
//-> this.sound와 같이 사용 가능

// *화살표함수의 this
//-> 화살표 함수의 this는 정적으로 바인딩되어 객체를 참조하지 못한다.
//정적 바인딩(함수가 정의될 때 결정되어 변하지 x)
//-> 대신 바로 바깥 범위에서 this를 찾는다. (전역 범위에서 함수가 정의된 경우, window 참조)

//변수 유효 변위
//자바스크립트에서 객체, 함수 모두 변수이다.
//변수의 유효범위는 해당 변수가 접근할 수 있는 변수, 객체 그리고 함수의 집합을 의미

//1. 지역 변수 - local variable
//2. 전역 변수 - global variable

//지역변수 - 함수 내 선언된 변수
//지역이라는 명칭과 일치하게, 변수가 선언된 함수 내에서만 유효, 함수 종료시 메모리에서 삭제
//매개변수도 함수 내 정의되는 지역변수처럼 동작한다.

function localNum() {
  let num = 10; //지역 변수
  console.log(`함수 내부에서 변수 타입은 ${typeof num}`); //number
}

localNum();
console.log('함수 호출 뒤 변수 num타입은 ' + typeof num); //undefined
console.log('선언 안된 변수의 타입은 ' + typeof home); //undefined

//전역변수 - 함수 외부에서 선언된 변수
//프로그램 어느 영역에서나 접근 가능, 웹페이지를 닫아야 메모리에서 사라짐
//let 전역변수
let num2 = 10;

function globalNum() {
  console.log(`함수 내부에서 num2값은 ${num2}`); //10
  num2 = 20; //전역 변수 num2값을 함수 내부에서 변경
}

function globalNum2() {
  console.log(num2); //20
  num2 = 30; //위에서 바뀐 전역 변수 num2값을 함수 내부에서 변경
}

var num3 = 1;
function globalNum3() {
  let num2 = 50;
  var num3 = 2;
  console.log('함수 내 지역변수 num2값은 ' + num2);
  console.log('함수 내 전역변수 num2값은 ' + window.num2);
  //전역변수 참조시 undefined가 출력됨 - 전역변수를 let으로 선언해서.
  //let으로 선언한 변수는 블록 스코프를 가진다.
  //따라서 함수 내에 선언한 지역변수가 전역변수를 가리게 되는 일시적 사각지대("시간상 사각지대"(Temporal Dead Zone, TDZ))에 놓인다.
  //-> 그래서 undefined가 출력됨
  console.log(num3);
  console.log(`함수 내 var로 선언한 전역변수 num3값은 ${window.num3}`);
}

globalNum();
globalNum2();
globalNum3();
console.log('함수 호출 뒤 변수 num2값은 ' + num2); //30

//const 전역변수
const numConst = 5;

function globalNumConst() {
  console.log(`함수 내부에서 numConst값은 ${numConst}`); //5
  //numConst = 10; //const로 전역변수가 선언되었기 때문에 재할당은 되지 않는다.
}

function globalNumConst2() {
  //동일 이름으로 지역변수로 선언하는 것은 가능
  const numConst = 10;
  console.log(`함수 내부에서 선언한 numConst값은 ${numConst}`);
}

globalNumConst();
globalNumConst2();
console.log('함수 호출 뒤 변수 numConst값은 ' + numConst); //5

//함수의 유효범위
//블록이란 코드 내에서 {}로 둘러쌓인 부분으로, 블록 내 정의된 변수는 블록 외부에서 접근 x
//이렇게 블록을 기준으로 하는 유효범위를 블록단위 유효범위라 한다.
//-> 자바스크립트는 함수를 블록 대신 사용한다.

//1. 전역함수
//전역 함수는 모든 전역변수와 전역 함수에 접근 가능
var x = 10,
  y = 20;
function sub() {
  return x - y; //10, 전역 변수 x,y에 접근
}
document.write(`<br> ${sub()} <br>`);

function parent() {
  var x = 1,
    y = 2;
  function add() {
    return x + y; //지역변수 x,y 접근근
  }
  return add(); //3
}
document.write(parent() + '<br>');

let x1 = 10,
  y1 = 20;
function sub2() {
  return x1 - y1; //10, 전역 변수 x,y에 접근
}
document.write(`<br> ${sub2()} <br>`);

function parent2() {
  let x1 = 1,
    y1 = 2;
  function add() {
    return x1 + y1; //지역변수 x,y 접근근
  }
  return add(); //3
}
document.write(parent2() + '<br>');

//미리 정의된 전역 함수
//사용자의 편의에 따라 여러 전역함수가 미리 정의되어 제공된다.
//-> 어떤 타입의 객체든 사용가능
document.write(
  `<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects" target="_blank">표준 내장 객체</a><br>`
);

//1. eval()
//문자열로 표현된 자바스크립트 코드 실행해준다.
//** mdn에서 사용하지 않는 게 좋다 함

//2. isFinite()
//주어진 값이 유한한 수인지 검사해 결과 반환(true/false)
console.log(isFinite(100)); //true
console.log(isFinite(null)); //true
console.log(isFinite('')); //true
console.log(isFinite(-Infinity)); //false
console.log(isFinite(Infinity)); //false
console.log(isFinite(NaN)); //false
console.log(isFinite(undefined)); //false
// 양, 음 Infinity, NaN, undefined 빼고 true

//3. isNaN()
//전달된 값이 NaN인지 검사해 결과 반환 - 결과 boolean
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN(123)); //false
console.log(isNaN('')); //false, 빈 문자열은 0으로 변환
console.log('문자열 123은 숫자가 아닌가? ' + isNaN('123'));
//->false로 문자열 123을 자동으로 숫자 123으로 바꾼다.

//*es6에서는 Number.isNaN() 메소드 사용을 권장함
//isNaN() 자체로는 함수의 인수가 Number 형이 아니면, 숫자로 강제 변경 후 NaN인지 판단한다.
//따라서 의도되지 않은 변경이 이뤄질 수 있으므로, Number.isNaN() 권장함

//4. parseFloat()
//문자열 파싱해 부동 소수점 수로 반환한다.
console.log(parseFloat('문자열')); //NaN
console.log(parseFloat('3.14')); //3.14

//5. parseInt()
//문자열 파싱해 정수로 반환한다.
//parseInt(string)
//paresInt(string,radix) radix는 진법
console.log(parseInt('문자열')); //NaN
console.log(parseInt('3.14')); //3
console.log(parseInt('314abc')); //314

//두번째 인수로 특정 진법을 전달시, 해당 진법에 맞는 정수로 반환한다.
console.log(parseInt('10', 2)); //2

//6. decodeURI(), decodeURIComponent()
//encodeURI() 또는 다른 방법으로 만든 URI를 해독한다.
//encodeURIComponent() 또는 다른 방법으로 만든 URI를 해독한다.
/*
decodeURI(해독할URI);
decodeURIComponent(해독할URI);
*/

//7. encodeURI(), encodeURIComponent()
//URI에서 주소표시하는 특수문자를 제외하고, 모든 문자를 이스케이프 시퀀스처리해 부호화한다.
//encodeURIComponent()에서는 encodeURI()에서 부호화하지 않은 모든 문자까지 이스케이프 시퀀스 처리한다.
/*
encodeURI(부호화할URI);
encodeURIComponent(부호화할URI);
*/
var uri = 'http://google.com/search.php?name=홍길동&city=서울';
var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
document.write(enc1 + '<br>' + enc2 + '<br><br>');

var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);
document.write(dec1 + '<br>' + dec2);

//8. Number()
//전달받은 객체의 값을 숫자로 변환
//Number(객체);

Number('123'); // 123
Number('123 초콜릿'); // NaN
Number(true); // 1
Number(false); // 0

//9. String()
//전달받은 객체의 값을 문자열로 변환
//String(객체);

String(Boolean(1)); // true
String(Boolean(0)); // false
String(123); // 123

//함수 호이스팅
//함수 유효범위는 함수 안에서 선언된 모든 변수는 함수에서 유효하다는 의미
//이 유효 범위의 적용은 변수가 선언되기 전에도 똑같이 적용된다.
//-> 이것을 함수 호이스팅이라 함
//-> 함수 내 있는 모든 변수 선언은 함수의 맨 위로 이동된 것처럼 동작한다.

let globalNum4 = 3;
function printNum() {
  // 호이스팅되어 let globalNum4; 선언부가 위로 올라온다.
  //-> 선언만 되고, 초기화 안된 상태

  // 1) undefined 출력
  //함수 내 지역변수 선언 전 globalNum4의 값이 undefined가 된다.
  //-> 왜냐하면! 함수 호이스팅 때문에
  //-> let변수는 초기화하기 전에는 읽거나 쓸 수 없음
  document.write('지역 변수 선언 전 globalNum4값 ' + globalNum4 + '<br>'); //값 할당x
  let globalNum4 = 5;
  // 호이스팅되어 globalNum4 = 5; 가 된다.
  // 2) 5출력
  document.write('지역 변수 선언 후 globalNum4값 ' + globalNum4 + '<br>'); //값 할당o
}

function printNum2() {
  //3) 3출력
  //-> 같은 변수명의 지역변수가 선언되지 않았을 때는 함수 내에서 전역변수가 참조된다.
  //let num = 5;
  document.write(`지역변수 선언 없을 때 값 ${globalNum4}<br>`);
}

printNum();
printNum2();

/* ***************** */
//객체
//객체는 key와 value로 구성된 프로퍼티의 정렬되지 않은 집합
//프로퍼티의 값으로 함수가 올 수도 있다. -> 메소드
//{키1: 값1, 키2: 값2, ..}의 형태로 구성되어 있다.
//키에는 공백 x 공백을 넣고 싶다면 따옴표를 사용해 문자열로 넣는다.

//객체 생성
//1. 리터럴 표기를 이용한 방법
/* var 객체이름 = {
    프로퍼티1이름 : 프로퍼티1의값,
    프로퍼티2이름 : 프로퍼티2의값,
    ...
}; */

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
  'favorite fruit': 'apple'
};

console.log(ironMan);

//2. 생성자 함수를 이용한 방법
//new 연산자를 사용해 객체 생성하고 초기화가 가능하다.
//이때 사용되는 메소드는 생성자라 한다.

var day = new Date();
// new 연산자를 사용하여 Date 타입의 객체를 생성함.
document.write('올해는 ' + day.getFullYear() + '년입니다.');

//3. Object.creat() 메소드를 이용한 객체 생성
//Object.creat() 메소드는 지정된 프로토타입의 객체와 프로퍼티를 가지고, 새로운 객체를 만들어준다.
/* Object.create(프로토타입객체[ , 새로운객체의프로퍼티1, 새로운객체의프로퍼티2, ...]); */

const Person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

const person1 = Object.create(Person);
person1.firstName = 'John';
person1.lastName = 'Doe';
console.log(person1.fullName()); // 출력결과: "John Doe"

//함수에서 객체 파라미터로 받기
function print(hero) {
  const text = `${hero.alias}(${hero.actor}) 역할을 맡은 배우는 ${hero.name}`;
  console.log(text);
  //아이언맨(토니 스타크) 역할을 맡은 배우는 토니 스타크
}

print(ironMan);

//객체의 비구조화 할당
//파라미터로 받아온 hero 내부의 값을 조회시 hero.를 반복해서 입력
//-> 객체 비구조화 할당을 사용하면 보기 좋게 작성할 수 있다.

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print2(hero) {
  //객체에서 값을 추출해 새로운 상수로 선언하는 것
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}`;
  console.log(text);
  //캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스
}

print2(captainAmerica);

//위 대신 파라미터 단계에서 비구조화 할당을 할 수도 있다.
function print3({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print3(captainAmerica);

//객체 안에 함수 넣기
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  },
  say2: () => {
    //console.log(this.sound);
    // 화살표 함수의 this는 자신이 속한 객체를 가르키지 x
    //console.log(dog.sound);
  }
};
dog.say(); //멍멍!
dog.say2();

// *function으로 만든 함수의 this
//-> 함수를 호출한 객체를 참조한다.
//함수가 호출될 때 호출한 객체에 의해 동적으로 결정된다.
//-> this.sound와 같이 사용 가능

// *화살표함수의 this
//-> 화살표 함수의 this는 정적으로 바인딩되어 객체를 참조하지 못한다.
//정적 바인딩(함수가 정의될 때 결정되어 변하지 x)
//-> 대신 바로 바깥 범위에서 this를 찾는다. (전역 범위에서 함수가 정의된 경우, window 참조)

function Person2() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    //document.write(this.age);
  }, 1000);
}

var p = new Person2();

//Getter 함수와 Setter 함수
//사용하는 이유
// 1. 데이터의 무결성 보장 (객체 속성에 직접 접근x 간접 접근한다.)
// 2. 객체 내부 구조 캡슐화 (내부 구조를 숨겨 안정성을 높인다.)
// 3. 코드의 가독성 높여, 유지보수 좋음

//Getter함수
//객체의 속성 값을 가져올 때 사용하는 함수
//-> 속성 값을 가져올 때 추가 로직을 수행할 수 있다.
//-> 밑에서처럼 결과값을 반환하는 로직같이
//일반적인 객체 속성처럼 호출한다.
//객체.속성

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

//Setter 함수
//객체의 속성 값을 설정할 때 사용하는 함수
//-> 값을 검증하거나 추가 로직을 수행할 수 있음
//대입 연산자를 이용해 값을 할당하는 것처럼 호출하면 된다.
//객체.속성 = 값;

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
    console.log(this.sum);
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.', this._a);
    this._a = value;
    console.log('바뀐 a값은 ' + this._a);
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.', this._b);
    this._b = value;
    console.log('바뀐 b값은 ' + this._b);
    this.calculate();
  }
};

//console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum);
