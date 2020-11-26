// python에서의 list, java에서는 array, javascript에서도 array(배열)
// 배열의 용도 : 여러 개의 데이터를 1개의 변수에 담아놓기 위해 사용

const arr = [10, 20, 30];
console.log(arr);
console.log(arr[0]);  // 인덱스를 활용해서 배열에 있는 원소 꺼내기

// 배열 순회
// for, forEach, map(중요!)

// 1. for문을 이용한 배열 순회
// 순회 : 전체를 처음~끝까지 도는 것
for (let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

// 2. forEach문을 이용한 배열 순회
arr.forEach((data, idx) => {
    console.log(data, idx);
});
// for문은 우리가 직접 변수 지정해야하고 복잡함
// forEach는 최대 변수 2개를 가질 수 있음
// arr 배열의 원소가 하나하나씩 들어온다.

// forEach의 장점 : length를 알 필요가 없다.
// index 보기 싫으면 idx 빼면 됨.

// 3. map을 활용한 배열 순회 (리액트에서 제일 많이 사용되는 방식)
// 원소를 하나씩 꺼내서 리턴
const mappedArr = arr.map((x) => x);
console.log("mappedArr", mappedArr);
// arr과 똑같은 배열
// 근데 map 에는 좀 더 특별한 기능 O
const mappedArr2 = arr.map((x) => x * 2);
console.log("mappedArr2", mappedArr2);
// 원소 각각에 2씩 곱해진 배열이 나옴.

// 배열에 데이터 추가하기 (push)
arr.push(40);
arr.push(50);

console.log(arr);

// 배열에서 원소 제거하기 - pop() -> 배열의 제일 뒤에 있는 원소를 제거
const removedElement = arr.pop();
console.log(removedElement);
console.log(arr);

// 배열에 데이터 추가하기 (unshift) -> 배열의 제일 앞에 원소를 추가
arr.unshift(0);
console.log(arr);

// 배열에서 원소 제거하기 - shift() -> 배열의 제일 앞에 있는 원소를 제거
arr.shift();
console.log(arr);

