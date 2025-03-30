const botao = document.getElementById("botaoMaluco");
const botaoSim = document.getElementById("sim");
const audio = document.getElementById("musica");

botaoSim.addEventListener("click", () => {
    audio.play()
      .then(() => {
        console.log("Música começou a tocar!");
      })
      .catch((err) => {
        console.error("Não foi possível reproduzir o áudio:", err);
      });
  });
  

botao.addEventListener("click", () => {
  setInterval(() => {

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;

    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;

    const posX = Math.random() * (larguraTela - larguraBotao);
    const posY = Math.random() * (alturaTela - alturaBotao);

    botao.style.left = posX + "px";
    botao.style.top = posY + "px";

  }, 700);
});

