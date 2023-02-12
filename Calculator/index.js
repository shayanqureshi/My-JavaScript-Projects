const allButtons = document.querySelectorAll(".btn")
// console.log(allButtons);
const inputTag = document.querySelector(".input-tag");

allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.value !== "=" && event.target.value !== "c"){
            inputTag.value = inputTag.value + event.target.value;
        }
        else if (event.target.value === "c"){
            inputTag.value = "";
        }
        else{
            inputTag.value = eval(inputTag.value);
            console.log(inputTag.value);
        }
    })
})
