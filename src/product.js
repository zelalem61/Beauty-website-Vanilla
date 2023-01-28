const display_one = document.querySelector("#display-one");
const display_two = document.querySelector("#display-two");

function slide(){
    if (display_one.style.display === "none"){
        display_one.style.display="block";
        display_two.style.display="none";
        
    }
    else{
        display_one.style.display = "none";
        display_two.style.display = "block";
    }

}
const searchInput = document.querySelector('#search-input');
const productElements = document.getElementsByClassName('product');
const searchBtn = document.querySelector('#search-submit');
const slider1  = document.getElementsByClassName("left-slider")[0];
const slider2  = document.getElementsByClassName("right-slider")[0];
const container1 = document.querySelector("#display-one");
const container2 = document.querySelector("#display-two");


function search(){
    slider1.style.display="none";
    slider2.style.display="none";
    container1.style.display="block";
    container2.style.display="block";
    const searchTerm = searchInput.value.toLowerCase();
    let i =0;
    for (const product of productElements){
        const productName  = document.getElementsByClassName('product__name')[i].textContent.toLowerCase();
        if (productName.includes(searchTerm)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
        i+=1
}
}

const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", (e) => {e.preventDefault()})