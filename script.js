// 1.
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2.
setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2)

    // Nested Timeout
    setTimeout(() => {
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);

// 3a.
let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

// 3b.
const btn = document.querySelector(`button`);
btn.addEventListener(`click`, () => {
    clearInterval(time)
});

// BONUS

// 4.
// const countDown = document.querySelector(`#countdown`);
// function startTimer(duration, display){
//     let timer = duration, minute, seconds;
//     minutes = parseInt(timer/60, 10);
//     seconds = parseInt(time%60, 10);
// }

const div3 = document.querySelector(`#countdown`);
const p3 = document.createElement(`p`);
let num = 120;
const count2 = setInterval(() => {
    if (num > 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        p3.innerText = `${minutes}:${seconds}`;
        div3.append(p3);
    } else {
        clearInterval(count2);
        p3.innerText = `TIME IS UP!`;
        div3.append(p3);
    }
    num--;
}, 1000);