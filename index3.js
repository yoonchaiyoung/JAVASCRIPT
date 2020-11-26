// callback 함수 없을 때 ; 비동기 방식
const big_task = () => {
    for (let i = 0; i < 1000; i++){
        console.log(i);
    }
    alram();
}

const alram = () => {
    console.log("big_task done");
};

const doAdd = (a, b) => {
    return a + b;
};

big_task();
console.log(doAdd(10, 20));

// 덧셈을 하기 전에 1000번의 for문이 도는 걸 기다림. 대기하고 있음.
// 근데 callback으로 하게 되면 이야기가 달라진다.
