const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
   enunciado: "Você é gay?",
   alternativas: [
    "sim",
    "não"
   ]
}, 
{
    enunciado: "Você gosta de gatos?",
    alternativas: [
     "sim",
     "não"
    ]
 },
 {
    enunciado: "qual estação você prefere, inverno ou verão?",
    alternativas: [
      "Inverno",
      "Verão"
    ]
 },
 {
    enunciado: "Você é introvertido ou extrovertido?",
    alternativas: [
      "introvertido",
      "extrovertido"
    ]
 },
 {
    enunciado: "Taylor Swift ou Kanye West?",
    alternativas: [
      "Taylor Swift",
      "Kanye West"
    ]
 },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();{
   for(const alternativa of perguntaAtual.alternativas){
       const botaoAlternativas = document.createElement("button");
       botaoAlternativa.textContent = alternativa;
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}
mostraPergunta();