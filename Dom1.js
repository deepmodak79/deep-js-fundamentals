//Question 2:- Create 3 divs with common class name "box". Access them & add some unique of them.

let divs=document.querySelectorAll(".box");
console.dir(divs);
console.log(divs[0]);
console.log(divs[0].innerHTML);


divs[0].innerText="Deep";
divs[1].innerText="Modak";
divs[2].innerText="changed";