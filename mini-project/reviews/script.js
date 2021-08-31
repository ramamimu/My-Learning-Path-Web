let photo = [
    {
        name:"Anderson Santos",
        img:"img/anderson-santos-Edited.jpg",
        capt:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam saepe laborum iusto! Corrupti, quis possimus? Vitae porro illum voluptatem facilis beatae magni. Id, voluptatem ratione vero saepe perspiciatis, error reiciendis recusandae velit at quas consequuntur mollitia culpa ea aperiam numquam rem sequi laboriosam nostrum beatae doloremque! Totam, ab fuga."
    },
    {
        name:"Jonathan Cooper",
        img:"img/jonathan-cooper-Edited.jpg",
        capt:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam saepe laborum iusto! Corrupti, quis possimus? Vitae porro illum voluptatem facilis beatae magni. Id, voluptatem ratione vero saepe perspiciatis."
    },
    {
        name:"Stow Kelly",
        img:"img/stow-kelly-Edited.jpg",
        capt:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam saepe laborum iusto! Corrupti, quis possimus? Vitae porro illum voluptatem facilis beatae magni. Id, voluptatem ratione vero saepe perspiciatis, error reiciendis recusandae velit at quas consequuntur mollitia."
    }
];

let counter = 0;

let prev = document.getElementById("previous");
let next = document.getElementById("next");

let img = document.getElementById("img");
let nama = document.getElementById("name");
let text = document.getElementById("text");

function changeContent() {
    img.src = photo[counter].img;
    nama.textContent = photo[counter].name;
    text.textContent = photo[counter].capt;
}

prev.addEventListener("click", function () {
    counter--;
    if (counter < 0)
        counter = photo.length - 1;
    changeContent();
})

next.addEventListener("click", function () {
    counter++;
    if (counter >= photo.length)
        counter = 0;
    changeContent();
})