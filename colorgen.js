let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let heading=document.querySelector("h3");
    let random=randomcolor();
    heading.innerText=random;

    let div=document.querySelector("div");
    div.style.backgroundColor=random;
})


function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
     
    let color=`rgb(${red},${green},${blue})`;
    return color;
}