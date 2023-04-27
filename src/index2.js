import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Vanilla study again</h1>
<div>

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
let day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)

switch (day) {
  case 1: // 월요일인 경우
  case 2: // 화요일인 경우
  case 3: // 수요일인 경우
  case 4: // 목요일인 경우
  default:
    // 0부터 6까지의 값이 아닌 경우
    document.write('아직도 주말은 멀었네요... 힘내자구요!!');
    break;
  case 5: // 금요일인 경우
    document.write('오늘은 불금이네요!!');
    break;
  case 6: // 토요일인 경우
  case 0: // 일요일인 경우
    document.write('즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!');
    break;
}
