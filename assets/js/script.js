let expand = [...document.querySelectorAll(".expand")];
let cardProcess = [...document.querySelectorAll(".card-process")];

expand.map((e, index) => {
  e.addEventListener("click", () => {
    // Fechar todas as outras respostas
    cardProcess.forEach((cad, i) => {
      if (i !== index) {
        cad.classList.add("close");
      }
    });

    // Abrir ou fechar a resposta associada à pergunta clicada
    let cad = cardProcess[index];
    cad.classList.toggle("close");
  });
});

// /* testimonials */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
