let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let choose = "first";
console.log(choose);

setTimeout(function () {

    if (choose==="first")
    {
        document.getElementById("btn").addEventListener("click", function () {
            // console.log("masuk");
            let numb1 = getRandomNumb();
            let numb2 = getRandomNumb();
            let numb3 = getRandomNumb();
            
            let temp = `#${arr[numb1]}${arr[numb2]}${arr[numb3]}`;
            console.log(temp);
            document.body.style.backgroundColor = temp;
            document.getElementById("lotre").textContent = temp;
        });
    }
    else
    {
        document.getElementById("btn").addEventListener("click", function () {
            // console.log("masuk");
            let numb1 = getRandomNumb();
            let numb2 = getRandomNumb();
            let numb3 = getRandomNumb();
            let numb4 = getRandomNumb();
            let numb5 = getRandomNumb();
            let numb6 = getRandomNumb();
            

            let temp = `#${arr[numb1]}${arr[numb2]}${arr[numb3]}${arr[numb4]}${arr[numb5]}${arr[numb6]}}`;
            console.log(temp);
            document.body.style.backgroundColor = temp;
            document.getElementById("lotre").textContent = temp;
        });
    }

    function getRandomNumb() {
        return Math.floor(Math.random()*arr.length);
    }

    document.getElementById("simple").addEventListener("click", function () {
        choose = "first";
        console.log("masuk 1");
    });

    document.getElementById("hex").addEventListener("click", function () {
        choose = "else";
        console.log("masuk 2");
    });
}, 100);