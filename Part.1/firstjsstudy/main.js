// // String (문자 데이터)
// // 따옴표를 사용합니다

// let myName = "name";
// let email = 'test@gmail.com';
// let hello = `hello ${myName}?!`;

// console.log(myName);
// console.log(email);
// console.log(hello);

// // Number (숫자 데이터)
// // 정수 및 부동소수점 숫자를 나타냅니다.

// let number = 123;
// let opacity = 1.57;

// console.log(number);
// console.log(opacity);

// // Boolean (불린데이터)
// // true, false 두가지 값 밖에 없는 논리 데이터 입니다.

// let checked = true;
// let isShow = false;

// console.log(checked);
// console.log(isShow);

// // undefined
// // 값이 할당되지 않은 상태를 나타냅니다.

// let undef;
// let obj = { abc: 123 };

// console.log(undef); // undefined
// console.log(obj.abc);
// console.log(obj.xyj); // undefined

// // Null
// // 어떤 값이 의도적으로 비어있음을 의미합니다.

// let empty = null;

// console.log(empty); // null

// // Object (객체 데이터)
// // 여러 데이터를 Key:Value 형태로 저장합니다. { }

// let user = {
//     name: 'name',
//     age: 86,
//     isValid: true
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.isValid);

// // Array (배열 데이터)
// // 여러 데이터를 순차적으로 저장합니다. [ ]

// let fruits = ['Apple', 'Banana', 'Cherry']

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // let 재사용이 가능
// // 변수 선언

// let a = 2;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// // 값 (데이터)의 재할당 가능

// let a = 12;
// console.log(a); // 12

// a = 999;
// console.log(a); // 999

// // const 값(데이터)의 재할당 불가

// const a = 12;
// consele.log(a); // 12

// a = 999;
// console.log(a); // TypeError : Assignment to constant variable

// // let this = 'Hello!' // SyntaxError
// // let if = 123; // SyntaxError
// // let break = true; // SyntaxError

// // 함수 선언
// function helloFunc() {
//     // 실행 코드
//     console.log(1234);
// }

// // 함수 호출
// helloFunc(); 1234

// function returnFunc() {
//     return 123;
// }

// let a = returnFunc();

// console.log(a);

// function sum(a, b) { // a, b는 매개변수 (Parameters)
//     return a + b;
// }

// // 재사용
// let a = sum(1, 2); // 1과 2는 인수(Arguments)
// let b = sum(7, 12);
// let c = sum(2, 4);

// console.log(a, b, c);

// // 기명(이름이 있는) 함수
// // 함수 선언!

// function hello(){
//     console.log('Hello~');
// }

// // 익명 (이름이 없는) 함수
// // 함수 표현!

// let world = function() {
//     console.log('World~');
// }

// hello();
// world();

// const test = {
//     name: 'name',
//     age: 85,

//     // 메소드 (Method)
//     getName: function () {
//         return this.name;
//     }
// };

// const hisName = test.getName();
// console.log(hisName);

// let isShow = true;
// let checked = false;

// if (isShow) {
//     console.log('show!');
// } else {
//     console.log('Hide?');
// }

// if (checked) {
//     console.log('Checked!');
// }


// let boxEl = document.querySelector('.box');
// console.log(boxEl);

// boxEl.addEventListener('click', function () {
//     console.log('click~!');
//     boxEl.classList.add('active');
//     console.log(
//         boxEl.classList.contains('active')
//     );
//         boxEl.classList.remove('active');
//         console.log(
//             boxEl.classList.contains('active')
//     );

// });

// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index + 1}`)
//     console.log(index, boxEl)
// });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent)

boxEl.textContent = 'test';
console.log(boxEl.textContent);

const a = 'Hello~';

// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 변환

const b = a.split('').reverse().join(''); // 메소드 체이닝

console.log(a);
console.log(b);