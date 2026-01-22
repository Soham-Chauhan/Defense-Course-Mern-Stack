const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();   // form submit karke jo data gayb ho ja raha to usko ye band karta hai
    const boy = document.getElementById("boy");
    const girl = document.getElementById("girl");

    const name1 = boy.value.length; // ------ textbox me se value ko nikalne ke liye
    const name2 = girl.value.length;

    const result = Math.pow(name1+name2,3)%101;  // -------- name ke character ki length find karke unka sum karo 
                                                    //aur fir unka cube nikalo aur usko 101 se module nikalo
                                                    // exp -- name1 = 5 character  name2 = 6
                                                    //        5+6 = 11 ---> 11^3 = 1331 % 101 = result

    const resultDisplay = document.querySelector('h2');
    resultDisplay.textContent = "Result : "+result+"%";

    // document.querySelector('h2').textContent = `Result: ${result}%`; // ----- ese bhi likh sakte hai
    // form.reset();  //--- ek bar value dalne ke bad form ke data ko reset karane ke liye
})