// Tableau de citations personnelles
let quoteList = [
    ["Le problème de la vie c'est qu'il y en a qu'une", "Orelsan"],
    ["Parfois, les chemins s'séparent, mais les erreurs se réparent, et la ligne d'arrivée est souvent la ligne de départ", "Orelsan"],
    ["Elle m'dit, T'es pas censé être là, J'ai dit, Près d'toi, c'est là ma place", "Orelsan"],
    ["Je pleure que de l'intérieur pour que mes soucis se noient", "Damso"],
    ["Le futur existe que parce qu'on y croit", "Damso"],
    ["Précède un je t'aime qui n'a pas oublié que t'as aimé un autre", "Damso"],
    ["Mais j'peux plus m'voir, ça m'rappelle trop toi", "Nekfeu"],
    ["J'ai le cœur en dentelle mais j'suis qu'un mur en tant qu'tel", "Nekfeu"],
    ["J'en avais marre de voir les mêmes s'emparer de nos récits", "Kery James"],
    ["Pour nous c'est dur, mais ça ne doit pas devenir un prétexte", "Kery James"]
];

let quote = document.querySelector("#a-quote");
let author = document.querySelector("#author");
let buttonQuote = document.querySelector("#button-quote");

let lastQuote = 0;
let randomQuote = 0;

function numberGenerator(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

buttonQuote.addEventListener("click", () => {
do {
    randomQuote = numberGenerator(quoteList.length);
} while (randomQuote == lastQuote)

quote.textContent = quoteList[randomQuote][0];
author.textContent = quoteList[randomQuote][1];
lastQuote = randomQuote;
});
