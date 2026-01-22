// const newElement=document.createElement("h2");
// newElement.id="Second";
// newElement.textContent = "Strike is Coming on 18 october"

// // console.log(newElement);

// const element = document.getElementById("first");
// // console.log(element);

// element.after(newElement);

// const newElement2 = document.createElement("h3");
//     newElement2.id = "third";
//     newElement2.textContent = "diwali aa rahi hai....";
//     // console.log(newElement2);

//     // newElement.after(newElement2);

//     newElement.before(newElement2);

//     newElement2.style.backgroundColor = "brown";
//     newElement2.style.fontSize = "30px";

//     console.log(newElement.getAttribute("id"));

//     const list = document.createElement("li");
//     list.textContent = "milk"; 

//     const list2 = document.createElement("li");
//     list2.textContent = "water"; 

//     const list3 = document.createElement("li");
//     list3.textContent = "tea"; 

//     const list4 = document.createElement("li");
//     list4.textContent = "paneer";

//     const ulElement = document.getElementById("listing");

//     ulElement.append(list, list2, list3);
//     // ulElement.append(list2);
//     // ulElement.append(list3);

//     // list2.after(list4);
//     ulElement.children[1].after(list4);

// const arr  = ["milk", "paneer", "tea", "water"];

// const unorderElement = document.getElementById("listing");
// const fragment = document.createDocumentFragment();

// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     fragment.append(list);
//     // unorderElement.append(list);
// }

// unorderElement.append(fragment);

// const s1 = document.getElementById("first");
// s1.remove();









//  Event

// function handle(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }


// second method

// const element = document.getElementById("first");

// element.onclick = function handleClick(){
//     element.textContent = "strike is coming"
// }







// best method ---- addEventListener

// const element = document.getElementById("first");

// element.addEventListener('click', ()=>{
//     element.textContent = "strike is coming";
// })

// element.addEventListener('click', ()=>{
//     element.style.backgroundColor = "pink";
// })






// const element = document.getElementsByClassName("box");
// const element = document.getElementById("first");

// element.addEventListener('click', ()=>{
//     element.textContent = "Element is click";
// })



// const parent = document.getElementById("parent");
// console.log(parent.children)

// for(let child of parent.children){
//     child.addEventListener('click', ()=>{
//         child.textContent = "I am Clicked";
//     })
// }


//zomato application workflow using callback hell


// function placedOrder(callback){
//     console.log("payment is in progress");

//     setTimeout(()=>{
//         console.log("Your payment is recived and order get placed");
//         callback();
//     },3000);
// }

// function preparingOrder(){
//     console.log("your food preparation is started");

//     setTimeout(()=>{
//         console.log("your order is now placed");
//     },3000);
// }
// placedOrder(()=>{
//     preparingOrder();
// });




// Promises in Javascript


fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})