let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
    showSlider("next")
}

prevDom.onclick = function () {
    showSlider("prev")
}
let timeRunning = 3000;
// let timeAutoNext = 7000;
let runTimeOut;
// let runAutoRun = setInterval(()=>{
//     nextDom.click()
// },timeAutoNext);

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev")

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
}

document.querySelectorAll('.pageButton').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // Obtém o ID do alvo do botão clicado
        const targetPage = document.getElementById(targetId); // Obtém o elemento alvo com base no ID
        targetPage.style.display = 'flex';
        document.body.style.overflow = "hidden"
    });
});

document.querySelectorAll('.closePage').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target'); // Obtém o ID do alvo do botão clicado
        const targetPage = document.getElementById(targetId); // Obtém o elemento alvo com base no ID
        targetPage.style.display = 'none';
        document.body.style.overflow = "auto"
    });
});
