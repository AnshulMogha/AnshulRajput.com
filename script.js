document.addEventListener("scroll",()=>{
    let navbar=document.getElementById("navbar");
    if(scrollY>0)
        navbar.style.backgroundColor="rgba(90, 90, 90, 1)";
    else
    navbar.style.backgroundColor=backgroundColor="rgba(90, 90, 90, .7)";

});

const menuBtn=document.getElementById("Menu");
const phoneBar=document.getElementById("Phone-navbar");

menuBtn.addEventListener("click",()=>{
    let phoneBarDisplay=phoneBar.style.display;    
    if(phoneBarDisplay=="block")
    phoneBar.style.display="none";
    else
    phoneBar.style.display="block";
});