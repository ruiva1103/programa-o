const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem faz parte da vocalRacha?",
        alternativas: [
            {
                texto: "I.N e Seungmin",
                afirmacao: "Correto"
            },
            {
                texto: "Bangchan e Hyunjin",
                afirmacao: "Errado"
            }
        ]
    },
    {
        enunciado: "Quem faz parte da danceRacha?",
        alternativas: [
            {
                texto: "Lee Know, Hyunjin e Felix",
                afirmacao: "correto"
            },
            {
                texto: "Changbin, Han e I.n",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Quem faz parte do 3racha?",
        alternativas: [
            {
                texto: "Seungmin, Lee Know e I.n",
                afirmacao: "errado"
            },
            {
                texto: "Bangchan, Changbin e Han",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "Quantos gatos o Lee Know tem?",
        alternativas: [
            {
                texto: "2",
                afirmacao: "errado"
            },
            {
                texto: "3",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "O mais velho do grupo e o mais novo, respectivamente",
        alternativas: [
            {
                texto: "Lee Know e Seungmin",
                afirmacao: "errado"
            },
            {
                texto: "Bangchan e I.n",
                afirmacao: "certo"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
