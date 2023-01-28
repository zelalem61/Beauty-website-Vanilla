const firstEx=document.querySelector(".product-one");
const secondEx=document.querySelector(".product-two");

const first=document.querySelectorAll(".product-one");
const second=document.querySelectorAll(".product-two");

function slide(){
    if (firstEx.style.display === "none"){
        first.forEach((el)=>{
            el.style.display="block";
        })
        second.forEach((e)=>{
            e.style.display="none";
        })
    }
    else{
        first.forEach((el)=>{
            el.style.display="none";
        })
        second.forEach((e)=>{
            e.style.display="block";
        })
    }

}