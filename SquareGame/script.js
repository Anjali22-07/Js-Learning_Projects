let s1= document.getElementById("ele1");
s1.addEventListener("mouseenter", function(){
    let r=Math.floor(Math.random()*100);   //Math.random()--gives random no b/w 0 to 1 and 
    // Math.random()*100--gives random no between 0 to 100 excluding 0 and 100.
    //floor is used to get the base number, because it will get us the decimal number
    s1.innerHTML=`<h1>${r}</h1>`;
    //$- gives the value directly
})
s1.addEventListener("mouseleave", function(){
    s1.innerHTML="<h1>1</h1>";
})

let s2=document.getElementById("ele2");
let clr="green"
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        s2.style.backgroundColor="green";
        clr="red";
    }
    else if(clr=="red"){
         s2.style.backgroundColor="red";
        clr="blue";
    }
    else{
        s2.style.backgroundColor="blue";
        clr="green";
    }

})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
})

//GENERATE RANDOM COLORS
//any colour is in form of rgb(a,b,c) where a,b,c lies between 0 to 255

let s3=document.getElementById("ele3");
s3.addEventListener("mouseenter", function(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
   s3.style.backgroundColor=`rgb(${a},${b},${c})`;

})
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor="white";
})
let s4=document.getElementById("ele4");
s4.addEventListener("click", function(){
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
   
   s1.style.backgroundColor=`rgb(${a},255,255)`;
   s2.style.backgroundColor=`rgb(255,${b},255)`;
   s3.style.backgroundColor=`rgb(255,255,${c})`;

})
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})

 