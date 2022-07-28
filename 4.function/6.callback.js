//용어 정리
//[일급객체] : first-class object, 일반 객체처럼 모든 연산이 가능한 것
// = [일급함수] : first-class function, 함수가 일반 객체처럼 모든 연산이 가능한 것
// 함수의 매개변수로 전달 가능
// 함수의 반환값 가능
// 할당 명령문 가능
// 동일 비교 대상 가능

//[고차함수] : higher-order function
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수를 고차함수라고 함

// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다. 
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다. 
// 그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
// action은 위의 add함수일수도있고, multiply 등 필요한 함수를 그때그때 불러와서 사용함
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;   //이렇게 return되면 영원히 정지, 밑에 claculator함수에서처럼 어떤 함수사용할 것인지 불러줘야함
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 1, add);
calculator(1, 2, multiply);

