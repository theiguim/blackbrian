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
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target'); // Obtém o ID do alvo do botão clicado
        const targetPage = document.getElementById(targetId); // Obtém o elemento alvo com base no ID
        targetPage.style.display = 'flex';
        document.body.style.overflow = "hidden"
    });
});

document.querySelectorAll('.closePage').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target'); // Obtém o ID do alvo do botão clicado
        const targetPage = document.getElementById(targetId); // Obtém o elemento alvo com base no ID
        targetPage.style.display = 'none';
        document.body.style.overflow = "auto"
    });
});



document.addEventListener("DOMContentLoaded", function () {

    // softSCROLL >>

    const links = document.querySelectorAll('nav.menu a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // GALERIA >>

    const modal = document.getElementById('modalGalery');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.closeGalery');
    const prevBtn = document.querySelector('.prevGalery');
    const nextBtn = document.querySelector('.nextGalery');
    const images = document.querySelectorAll('.gallery-item');
    let currentIndex;

    images.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = item.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalImg.src = images[currentIndex].src;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalImg.src = images[currentIndex].src;
    });


});
