const button = document.querySelector(".btn");
const rgbWritten = document.querySelector(".rgb");

button.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    rgbWritten.textContent = `rgb(${red}, ${green}, ${blue})`;
    const body = document.querySelector("body"); 
    console.log(body);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})