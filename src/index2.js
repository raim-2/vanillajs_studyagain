import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Vanilla study again</h1>
<div>
 <p>여기에 쓰여집니다.</p>
</div>
`;

//제어문 - 순차적 흐름을 제어해야 할 때 사용하는 실행문
//조건문, 반복문 등이 있다.

//if문, if-else문, if-else if문
//if(조건-표현식식) {참일때 실행하는 코드/실행문}
// 조건이 참일 때 코드를 실행한다.

var a = 1;
if (a + 1 === 2) {
  console.log('a+1은 2입니다.');
}

//실행할 코드가 한줄이면 중괄호 생략 가능하다.
a = 1;
if (a + 1 === 2) console.log('a+1은 2입니다.');

//if-else 참이면 if문 코드 실행, 아니면 else문 코드 실행
a = 10;
if (a > 15) {
  console.log('a가 15보다 크다');
} else {
  console.log('안크다');
}

//if-else문은 삼항연산자 조건문으로 표현할 수 있다.
a > 15 ? console.log('a가 커') : console.log('a가 작아');

//if-else if
a = 20;
if (a === 5) {
  console.log('5다');
} else if (a === 10) {
  console.log('10이다');
} else {
  console.log('둘다 아니다.');
}

//switch문
//case문 마지막에는 break를 해줘야 해당 코드에서 멈춘다.
//default: 는 case로 준비되지 않은 값인 경우를 의미미
let device = 'iphone';

switch (device) {
  // default:
  //   console.log('몰라요..');
  //   break;
  case 'iphone':
    console.log('아이폰');
    break;
  case 'ipad':
    console.log('아이패드');
    break;
  case 'galaxy':
    console.log('갤럭시');
    break;
  default:
    console.log('몰라요..');
    break;
}

//default절은 반드시 존재해야 하는 것은 아니고, 필요시 선언할 수 있다.
//default절 위치가 반드시 맨 뒤일 필요는 없다.

//여러 개의 case절 가지는 switch문
/*
let day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)

switch (day) {
  case 1: // 월요일인 경우
  case 2: // 화요일인 경우
  case 3: // 수요일인 경우
  case 4: // 목요일인 경우
  default:
    // 0부터 6까지의 값이 아닌 경우
    console.log('아직도 주말은 멀었네요... 힘내자구요!!');
    break;
  case 5: // 금요일인 경우
    console.log('오늘은 불금이네요!!');
    break;
  case 6: // 토요일인 경우
  case 0: // 일요일인 경우
    console.log('즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!');
    break;
}*/

//반복문 - 명령을 일정 횟수만큼 반복해 수행하도록 제어
//while, do-while, for, for-in, for-of문
//표현식의 검사를 통해 반복해서 실행되는 반복문 - 루프(loop)

//1.while문 - 특정 조건 만족할 때까지 계속해 반복
var i = 1;
while (i < 10) {
  console.log(i);
  i++;
}

//while문 내부에 표현식의 결과를 변경하는 실행문이 존재하지 않으면,
//프로그램은 루프를 계속 반복한다. - 무한루프
//*즉 어느순간에는 거짓의 결과를 갖도록 해야함

//2.do-while
//do-while문은 먼저 루프를 1회 실행 후 표현식을 검사한다.

i = 1;
var j = 1;

while (i > 3) {
  document.write('i:' + i++ + '<br>');
} //i =1 이므로 실행 x

do {
  document.write('j:' + j++ + '<br>');
} while (j > 3); //1회 실행된다.

//for문
//초기식, 표현식, 증감식 모두 포함하고 있다.
//쉼표 연산자 사용시 초기식이나 증감식을 동시에 사용할 수도 있다.
/* for(초기식; 표현식; 증감식) {
  실행문
} */

for (i = 0; i < 10; i++) {
  console.log(i + '이다');
}

//for-in문
//for/in문은 해당 객체의 모든 열거할 수 있는 프로퍼티를 순회할 수 있다.
/* for (변수 in 객체) {
  객체의 열거할 수 있는 프로퍼티 개수만큼 반복하고자 하는 실행문
} */

var arr = [3, 4, 5];

for (i = 0; i < arr.length; i++) {
  //배열의 모든 인덱스 출력
  console.log('인덱스 ' + i + '입니다');
} //0,1,2출력

//위 for문과 같은 동작 -배열에서 인덱스를 뽑아줌
for (i in arr) {
  console.log('인덱스 ' + i + '입니다');
} //0,1,2출력

//객체에서 프로퍼티에 접근
//모든 프로퍼티를 반환하는 것 x
//열거 가능한 프로퍼티만을 반환한다.
var obj = {
  name: '김씨',
  age: 20
};

console.log(Object.entries(obj));
//[[키, 값], [키, 값]] 형태의 배열로 변환
//[Array(2), Array(2)]//
//[['name','김씨'], ['age',20]]
console.log(Object.keys(obj));
//[키, 키, 키] 형태의 배열로 변환
//["name", "age"]
console.log(Object.values(obj));
//[값, 값, 값] 형태의 배열로 변환
//["김씨", 20]

for (i in obj) {
  console.log('프로퍼티 ' + i + '입니다');
} //name, age 출력

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

//for-of문
//반복할 수 있는 객체를 순회할 수 있도록 해주는 반복문
//반복할 수 있는 객체는 Array, Map, Set, arguments 객체 등이 있다.
//루프마다 객체의 열거할 수 있는 프로퍼티 값을 지정된 변수에 대입해준다.
//익스플로러에서는 지원x

/*for (변수 of 객체) {
  객체의 모든 열거 가능한 프로퍼티 개수만큼 반복적으로 실행하고자 하는 실행문
} */

arr = [3, 4, 5];
for (i = 0; i < arr.length; i++) {
  //배열의 모든 인덱스 출력
  console.log('인덱스 ' + arr[i] + '입니다');
} //3,4,5 출력

//위 for문과 같은 동작 -배열에서 인덱스를 뽑아줌
for (i of arr) {
  console.log('인덱스 ' + i + '입니다');
} //3,4,5 출력

arr = new Set([1, 1, 2, 2, 3, 3]);
//set 객체-동일 값 중복 포함x, 순서 의미 x, 인덱스로 접근 x

for (var value of arr) {
  console.log(value + '값 입니다.');
}

//label문
//프로그램 내 특정 영역을 식별할 수 있게 해주는 식별자
//label문 사용시, continue문과 break문 동작이 프로그램 흐름을 특정 영역으로 이동시킬 수 있다.

/* lebel :
  식별하고자 하는 영역 */

arrIndex: for (i in arr) {
  document.write(i);
}

//continue문
//루프 내에 사용해, 해당 루프의 나머지 부분을 건너뛰고,
//바로 다음 표현식의 판단으로 넘어가게 한다.
//특정 조건에 대한 처리 제외하고 할 때 사용

//1-20 정수 중 3의 배수 제외하고 출력
var exceptNum = 3;
for (i = 0; i <= 20; i++) {
  if (i % exceptNum == 0) {
    continue;
  }
  document.write(i + ' ');
}

//continue + label
gugudan: for (i = 2; i <= 9; i++) {
  dan: for (j = 1; j <= 9; j++) {
    if ((i * j) % 2 == 0) {
      continue dan;
    }
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

//break문
//루프 내 사용해 해당 반복문 완전히 종료하고,
//바로 다음 위치한 실행문으로 프로그램 흐름을 이동시킴
//판단 결과와 상관없이 반복문을 빠져나가고 싶을 때 사용

var lectures = ['html', 'css', 'js', 'php'];
var topic = 'js';

for (i = 0; i < lectures.length; i++) {
  if (lectures[i] == topic) {
    console.log(topic + '과목은 ' + (i + 1) + '번째 과목');
    break;
  }
}

//break + label;
gugudan: for (i = 2; i <= 9; i++) {
  dan: for (j = 1; j <= 9; j++) {
    if (i > 3) break gugudan;
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}
