 const result = document.getElementById('result');

setInterval(()=>{
    const currentTime = Date.now(); // ----- ye current time batata he aur ye milisecond me batayenga aur ye 1 jan 1970 se chal raha hai
// console.log(currentTime);

const olympicTime = new Date(2028,6,14).getTime(); // ---- getTime() ki help se ham is date ko milisecond me bata sakte hai

let timer = olympicTime - currentTime;

const day = Math.floor(timer/(1000*60*60*24));
timer%=1000*60*60*24;

const hour = Math.floor(timer/(1000*60*60));
timer%=1000*60*60;

const minute = Math.floor(timer/(1000*60));
timer%=1000*60;

const second = Math.floor(timer/(1000));
timer%=1000;


result.textContent = `${day} : Days  ${hour} : Hours  ${minute} : Minute  ${second} : Second`;
})