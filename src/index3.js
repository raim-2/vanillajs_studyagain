import './styles.css';

document.getElementById('app').innerHTML = `
<h1>Vanilla study again</h1>
`;

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
//-> 인수로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 변수
/* function 함수명 (매개변수1, 매개변수2,....) {
  코드 블록 - 실행문
} 

호출하는 법은 함수명();
인수를 담아서 호출할 수도 있다. 함수명(인수1, 인수2..);
*/

function add(a, b) {
  //a,b는 매개변수수
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
function hello(name) {
  console.log('hello ' + name + '!');
}

hello('min'); //hello min!

//es6 템플릿 리터럴 사용해보기
//문자열 조합시 + 사용하는데, 이 대신 사용할 수 있다.
// `` 백틱을 사용
// 변수를 사용하고 싶을 때는 ${변수명}

function hello2(name) {
  console.log(`hello ${name}!`);
}

hello2('kim'); //hello kim!

//es6 화살표 함수
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

// **알아보기 **
/* 일반 function함수의 this와 화살표 함수의 this는 다르다*/

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

const People = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

//const person1 = Object.create(Person);
// person1.firstName = 'John';
// person1.lastName = 'Doe';
const People1 = Object.create(People, {
  firstName: 'John',
  lastName: 'Doe'
  // x: { firstName: 'John', lastName: 'Doe' }
});

console.log(People1.firstName); // 출력결과: "John Doe"

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

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    //document.write(this.age);
  }, 1000);
}

var p = new Person();

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
