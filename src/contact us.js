const nameInput = document.querySelector("#name");
const email  = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){
    clearMessage()
    let errorFlag = false;
    let exp = /[A-Za-z]+$/;
    let result = exp.test(nameInput.value)
    if(!result){
        errorNodes[0].innerText = "Invalid Name";
        nameInput.classList.add("error-border");
      errorFlag = true
    }
    if(!isValidEmail(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag=true
    }
    if(subject.value.length < 1){
        errorNodes[2].innerText = "Subject needed";
        subject.classList.add("error-border");
        errorFlag=true
    }
    if(message.value.length<1){
        errorNodes[3].innerText = "please enter message";
        message.classList.add("error-border");
        errorFlag=true
    }
    if(!errorFlag){
        success.innerText = "Success"; 
    }
}

function clearMessage(){
    for (let i =0; i<errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const searchInput = document.getElementsByClassName('search-form__input');
const productElements = document.getElementsByClassName('product');
searchInput.addEventListener('input', event =>
{
    const searchTerm = event.target.value.toLowerCase();
    for (const product of productElements){
        const productName  = document.getElementsByClassName('product__name')[0].textContent.toLowerCase();
        if (productName.includes(searchTerm)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
}
});