let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
    showSlider("next")
}

prevDom.onclick = function(){
    showSlider("prev")
}
let timeRunning = 2000;
// let timeAutoNext = 7000;
let runTimeOut;
// let runAutoRun = setInterval(()=>{
//     nextDom.click()
// },timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type === "next"){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev")

    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev")
    }, timeRunning);
}

// personalizando botões links

// document.querySelectorAll('.menu ul li a').forEach(link => {
//     link.addEventListener('mouseover', function() {
//       this.classList.add('active');
//     });
    
//     link.addEventListener('mouseout', function() {
//       this.classList.remove('active');
//     });
  
//     link.addEventListener('click', function(event) {
//       event.preventDefault(); // Impede o comportamento padrão do link
//       this.classList.add('active');
//       setTimeout(() => {
//         this.classList.remove('active');
//       }, 500); // Tempo em milissegundos para remover a classe 'active'
//     });
//   });