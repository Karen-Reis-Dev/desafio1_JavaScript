const botao = document.getElementById("mudarHumor");
const emoji = document.getElementById("emoji");
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");

const humores = [
  {
    emoji: "😄",
    titulo: "Dia incrível!",
    mensagem: "Hoje você está cheio(a) de energia! Aproveite o dia!",
    cor: "linear-gradient(135deg, #fef08a, #fdba74)"
  },

  {
    emoji: "😎",
    titulo: "Modo tranquilo!",
    mensagem: "Relaxa... hoje é dia de ficar de boa.",
    cor: "linear-gradient(135deg, #93c5fd, #67e8f9)"
  },

  {
    emoji: "🤩",
    titulo: "Modo criativo!",
    mensagem: "Sua criatividade está nas alturas. Crie alguma coisa!",
    cor: "linear-gradient(135deg, #f0abfc, #c4b5fd)"
  },

  {
    emoji: "😴",
    titulo: "Modo soneca!",
    mensagem: "Talvez um cafezinho ou uma pausa seja uma boa ideia...",
    cor: "linear-gradient(135deg, #cbd5e1, #94a3b8)"
  },

  {
    emoji: "🔥",
    titulo: "Modo poderoso!",
    mensagem: "Nada vai te parar hoje. Bora fazer acontecer!",
    cor: "linear-gradient(135deg, #fb7185, #f97316)"
  },

  {
    emoji: "🥳",
    titulo: "Modo festa!",
    mensagem: "A vida é curta demais para não comemorar as pequenas coisas!",
    cor: "linear-gradient(135deg, #f9a8d4, #fcd34d)"
  }
];

botao.addEventListener("click", () => {

  const humor =
    humores[Math.floor(Math.random() * humores.length)];

  emoji.textContent = humor.emoji;
  titulo.textContent = humor.titulo;
  mensagem.textContent = humor.mensagem;

  document.body.style.background = humor.cor;

});