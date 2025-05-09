const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", ()=>{
    //splitting user input charecter, reversing them, and joining them in a single word.
    let reverseInput = filterInput.split("").reverse("").join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a Palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome!`;
   
})

txtInput.addEventListener("keyup", ()=>{
    // removing space and all special charecters from entered values.
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
})