console.log("Hello");
let a=6;
console.log(a*a);
//let's learn to select an element using java script
//let x=document.querySelector("h1"); // even if there are too many h1 tags only the first one will be selected.

//querSelector -- is used to select the elements from html file. 
//if we want to select multiple elements-- we use querySelectorAll--it creates a node list
//--we also use this when there's a class

/*let x1=document.querySelectorAll(".yes");
console.log(x1);*/

//change in html
//changing color using js-- we can also change[CSS] font and color using JS.
/*let x= document.querySelector("h2");
x.style.color="black";
x.style.fontFamily="Gill Sans";

let y=document.querySelector("h1");
y.style.backgroundColor="Yellow";
//we can also change the html using js 
//y.innerHTML="Changed"; //changes the content of the element--Here, it changed the content of the h1.

//setTimeOut()-- This method is used to print or  bring any changes to the content after some delay.
//it's defination is setTimeOut(function,delay)
setTimeout(function(){
    y.innerHTML="Changed";
},2000);//this will change the content after 2 seconds.
setTimeout(function(){
    x.style.color="black";
x.style.fontFamily="Gill Sans";},
4000);*/

//**VERY IMPORTANT-- Event Listeners */
//Event Listener-- if i click any element or hover(enter the element with the mouse) or leave the element and there are some changes done.
//if i click Pikachu-- it's color must change then 

let x= document.getElementById("elel1"); //if we are going to select an id we can use "getElementById".
x.addEventListener("click",function(){ //addEventListener has two parameters(the event that takes place, and the function which will be done)
    x.innerHTML="JigglyPuff";
x.style.color="yellow";
x.style.backgroundColor="red";
})
let y= document.getElementById("elel2")
y.addEventListener("mouseenter",function(){  // to hover we use -- mousemove
    y.innerHTML="Harry";
y.style.color="White";
y.style.backgroundColor="Orange";
})

//mouseenter-- if we enter that particular element


//what we did here is-- we created an eventlistener of elel2--so when we click on hedwig the color of hermoine changes.
let z=document.getElementById("elel3")
y.addEventListener("click",function(){
    
    z.style.color="black";
    z.style.backgroundColor="purple";
})

z.addEventListener("click",function(){
    x.style.color="white"
    x.style.backgroundColor="green"
    x.innerHTML="Balbasur"
    y.innerHTML="Hedwig"
})
//reverting the changes
y.addEventListener("mouseleave",function(){  // to hover we use -- mousemove
    y.innerHTML="Hedwid";
y.style.color="Black";
y.style.backgroundColor="white";
})
 
