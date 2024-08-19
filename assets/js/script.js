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
