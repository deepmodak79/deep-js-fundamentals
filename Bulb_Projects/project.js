let box= document.querySelector("p");
// console.log(box);
// console.dir(box);

var flag=0;

let clickme= document.querySelector("button");
//console.dir(clickme);
clickme.addEventListener("click",function(){
    if(flag===0){
    console.log("Switch is clicked and bulb is ON");
    box.style.backgroundColor="yellow";
    flag=1;
    }
    else {
        console.log("Switch is clicked and bulb is OFF");
        box.style.backgroundColor="white";
        flag=0;
    }
})
