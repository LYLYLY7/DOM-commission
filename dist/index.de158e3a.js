const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const level5 = document.querySelector(".level5");
const level6 = document.querySelector(".level6");
const level7 = document.querySelector(".level7");
//下面函数是点击（点击一下）自动添加颜色
let n = 1;
const removeX = (e)=>{
    const t = e.currentTarget;
    setTimeout(()=>{
        t.classList.remove(`x`);
    }, n * 1000);
    n += 1;
};
const addX = (e)=>{
    const t = e.currentTarget;
    setTimeout(()=>{
        t.classList.add(`x`);
    }, n * 1000);
    n += 1;
};
level1.addEventListener(`click`, removeX, true);
level1.addEventListener(`click`, addX);
level2.addEventListener(`click`, removeX, true);
level2.addEventListener(`click`, addX);
level3.addEventListener(`click`, removeX, true);
level3.addEventListener(`click`, addX);
level4.addEventListener(`click`, removeX, true);
level4.addEventListener(`click`, addX);
level5.addEventListener(`click`, removeX, true);
level5.addEventListener(`click`, addX);
level6.addEventListener(`click`, removeX, true);
level6.addEventListener(`click`, addX);
level7.addEventListener(`click`, removeX, true);
level7.addEventListener(`click`, addX) // level1.addEventListener('click', (e) => {
 //     const t = e.currentTarget //解决方式，就是用一个变量存储
 //     setTimeout(() => {
 //         t.classList.remove('x') //e只存在点击的那一刻，加入setTime 1秒之后e已经不存在了
 //     }, n * 1000) //解决同时变色
 //     n += 1  //解决同时变色
 // }, true)  //true换成捕获
 // level2.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // }, true)
 // level3.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // }, true)
 // level4.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // }, true)
 // level5.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // }, true)
 // level6.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // }, true)
 // level7.addEventListener('click', (e) => {
 //     const t = e.currentTarget
 //     setTimeout(() => {
 //         t.classList.remove('x')
 //     }, n * 1000)
 //     n += 1
 // })
;

//# sourceMappingURL=index.de158e3a.js.map
