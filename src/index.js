import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Vanilla study again</h1>
<div>
<a href="javascript:void(0)">이 링크는 동작하지 않습니다.</a>
<a href="javascript:void(document.body.style.backgroundColor='yellow')">
    이 링크도 동작하지 않지만, HTML 문서의 배경색을 바꿔줍니다.
</a>
</div>
`;

/* 변수 선언 키워드, 선언 방식 */
//1. 변수 - 바뀔 수 있는 값
let value = 1; //선언과 초기화 작업
console.log(value);
value = 2; //let은 재할당이 가능하다.
//let value =2; //let은 재선언은 불가능하다.

//상수 const - 변하지 않는 값 , 재선언과 재할당 불가능
const a = 'orange';
console.log(a);
// a = 2; // read-only 라는 에러가 뜬다. 재할당 불가능
// const a = "lemon"; // 재선언 불가능

/* 데이터 타입 */
//데이터 타입은 원시타입과 참조타입으로 나뉜다.

//1. null - 선언과 할당이 된 상태, 값이 없음을 나타내는 것
let friend = null;
console.log(friend); //null
console.log(typeof null); //object, null의 타입은 객체다.

//2. undefined - 선언은 했으나, 값이 할당되지 않은 상태
let fruit;
console.log(fruit); //undefined
console.log(typeof undefined); //undefined

/* 연산자 */
//자바스크립트에서는 사칙연산과 같은 연산이 가능하다.
//연산을 가능하게 해주는 문자를 연산자라 한다.

// 산술연산자 - 사칙연산을 가능하게 해주는 연산자자
let plus = 1 + 2; // 3 더하기
let minus = 1 - 5; // -4 빼기
let mutiply = 3 * 4; // 12 곱하기
let divide = 4 / 2; // 2 나누기기
let mod = 4 % 2; //0 나누기 후 나머지 반환
console.log(plus, minus, mutiply, divide, mod);

// 1. 괄호를 사용한 경우, 괄호가 우선이다.
// 2. 우선순위대로 처리된다. ( **, *, /, % > +, -)

//전위 연산자, 후위 연산자
//전위는 1증가 된 값이 연산 결과값(++n 그 자체 값)
//후위는 1증가 하기 전 값이 연산 결과 (n++ 그 자체 값값)
let b = 1;
console.log(b++); //1, 연산 수행 후 피연산자값 1 증가
b++;
let c = 1;
console.log(++c); //2, 피연산자 값 1증가 후 연산 진행행
++c;
console.log(b, c); // 연산 후 값은 똑같음

// 대입 연산자 =
// 복합 대입 연산자  +=, -=, *=, /=, %=
var x = 10;
var y = 10;
x = x - 5;
y -= 5;
console.log(x, y); // 5,5

// 논리 연산자 - 불리언 타입을 위한 연산자
// ! - not, && - and, || or
// 연산 순서는 not -> and -> or
var d = !true;
console.log(d);

d = true && true;
console.log(d);

d = false || true;
var e = false || false;
console.log(d, e);

// 연산 순서는 not -> and -> or
value = !((true && false) || (true && false) || !false);
console.log(value);

//비교 연산자 == !=, ===, !==
// ==, != 값이 같은 지 여부만 체크 (동등 연산자)
// ===, !== 값과 타입까지 확인한다. (일치 연산자)
// >, >=, <, <=
d = null;
e = undefined;
console.log(d == e); //true, null과 undefined 모두 0이므로
console.log(d === e); //false, null은 객체, undefined는 undefined

//비트 연산자
// 논리 연산자와 비슷하나, 비트 단위로 논리 단위 수행
// &, |, ^(XOR연산자), ~(NOT연산자자), <<, >>, >>>
// ^ 두 비트가 서로 다르면 1반환, 서로 같으면 0 반환

//문자열 결합 연산자 (concat) +
//1. 피연산자가 둘다 숫자면 덧샘 수행
//2. 하나라도 문자열이면, 문자열 결합 수행
x = 3 + 4;
y = '좋은' + '하루';
var z = 12 + '월';
console.log(x, y, z);

//삼항 연산자
//유일하게 피연산자를 3개를 가지는 조건 연산자
//표현식 ? 반환값 1(참일때) : 반환값 2(거짓일때)
//짧은 if문 대신 할 수 있다.
x = 3;
y = 5;
var result = x > y ? x : y;
console.log(result);

//쉼표 연산자
//for문에서 사용시 루프마다 여러 변수를 동시에 갱신할 수 있다.
for (var i = 0, j = 9; i <= j; i++, j--) {
  console.log(i, j);
}

//delete 연산자
//피연산자인 객체, 객체의 프로퍼티 또는 배열의 요소 삭제해준다.
// 성공적으로 삭제시 참 반환, 삭제 못하는 경우 거짓 반환

var arr = [1, 2, 3];
delete arr[0];
console.log(arr, arr.length); //[ ,2,3] 3
//배열 요소 삭제하나, 배열의 길이를 줄이지는 않는다.

//typeof 연산자
//피연산자의 타입을 반환한다.
console.log(typeof NaN); //number

//instanceof 연산자
//피연산자인 객체가 특정 객체의 인스턴스 인지 아닌지 확인

//void 연산자
//어떤 타입이 오던지, undefined 값을 반환한다.
