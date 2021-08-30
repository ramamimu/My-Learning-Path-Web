let count = 0;
let showText = document.getElementById("result");
showText.textContent = count;

document.getElementById("increase").addEventListener("click", function () {
    count++;
    showText.textContent = count;
});

document.getElementById("decrease").addEventListener("click", function () {
    count--;
    showText.textContent = count;
});

document.getElementById("reset").addEventListener("click", function () {
    count=0;
    showText.textContent = count;
});