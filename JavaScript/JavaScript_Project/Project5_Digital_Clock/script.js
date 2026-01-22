
const div = document.querySelector('div');

setInterval(()=>{
    let time = new Date();
    // console.log(time.toLocaleTimeString());  // ------ iski help se hame hamara local time pata chalega

    div.textContent = time.toLocaleTimeString();
    
},1000) // ---- 1000 miliseconnd


