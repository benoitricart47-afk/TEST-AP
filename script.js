// --- État de la calculatrice ---
let affichage = "0";        // le nombre visible à l'écran (texte)
let valeurPrecedente = null; // le premier nombre de l'opération
let operateur = null;        // "+", "-", "*" ou "/"
let nouveauNombre = false;   // true = la prochaine touche commence un nouveau nombre

const ecranResultat = document.getElementById("resultat");
const ecranOperation = document.getElementById("operation");

const SYMBOLES = { "+": "+", "-": "−", "*": "×", "/": "÷" };

// --- Affichage ---
function mettreAJourEcran() {
  // On affiche une virgule à la française au lieu du point
  ecranResultat.textContent = affichage.replace(".", ",");
  ecranOperation.textContent =
    operateur !== null
      ? `${String(valeurPrecedente).replace(".", ",")} ${SYMBOLES[operateur]}`
      : "";
}

// --- Calcul ---
function calculer(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
  }
}

function formater(nombre) {
  if (!Number.isFinite(nombre)) return "Erreur";
  // Arrondi pour éviter les 0.1 + 0.2 = 0.30000000000000004
  return String(parseFloat(nombre.toPrecision(12)));
}

// --- Actions des touches ---
function saisirChiffre(chiffre) {
  if (nouveauNombre || affichage === "0" || affichage === "Erreur") {
    affichage = chiffre;
    nouveauNombre = false;
  } else if (affichage.length < 15) {
    affichage += chiffre;
  }
}

function saisirVirgule() {
  if (nouveauNombre || affichage === "Erreur") {
    affichage = "0.";
    nouveauNombre = false;
  } else if (!affichage.includes(".")) {
    affichage += ".";
  }
}

function choisirOperateur(nouvelOperateur) {
  if (affichage === "Erreur") return;

  // Si une opération est déjà en attente (ex: 2 + 3 puis ×), on la calcule d'abord
  if (operateur !== null && !nouveauNombre) {
    egal();
    if (affichage === "Erreur") return;
  }

  valeurPrecedente = parseFloat(affichage);
  operateur = nouvelOperateur;
  nouveauNombre = true;
}

function egal() {
  if (operateur === null) return;
  const resultat = calculer(valeurPrecedente, parseFloat(affichage), operateur);
  affichage = formater(resultat);
  valeurPrecedente = null;
  operateur = null;
  nouveauNombre = true;
}

function effacer() {
  affichage = "0";
  valeurPrecedente = null;
  operateur = null;
  nouveauNombre = false;
}

function retour() {
  if (nouveauNombre || affichage === "Erreur") return;
  affichage = affichage.length > 1 ? affichage.slice(0, -1) : "0";
  if (affichage === "-") affichage = "0";
}

function pourcent() {
  if (affichage === "Erreur") return;
  affichage = formater(parseFloat(affichage) / 100);
}

// --- Clics sur les boutons ---
document.querySelector(".clavier").addEventListener("click", (evenement) => {
  const bouton = evenement.target.closest("button");
  if (!bouton) return;

  const { chiffre, operateur: op, action } = bouton.dataset;

  if (chiffre !== undefined) saisirChiffre(chiffre);
  else if (op) choisirOperateur(op);
  else if (action === "virgule") saisirVirgule();
  else if (action === "egal") egal();
  else if (action === "effacer") effacer();
  else if (action === "retour") retour();
  else if (action === "pourcent") pourcent();

  mettreAJourEcran();
});

// --- Clavier de l'ordinateur ---
document.addEventListener("keydown", (evenement) => {
  const touche = evenement.key;

  if (/^[0-9]$/.test(touche)) saisirChiffre(touche);
  else if (["+", "-", "*", "/"].includes(touche)) choisirOperateur(touche);
  else if (touche === "." || touche === ",") saisirVirgule();
  else if (touche === "Enter" || touche === "=") egal();
  else if (touche === "Backspace") retour();
  else if (touche === "Escape") effacer();
  else if (touche === "%") pourcent();
  else return; // touche non gérée : on ne fait rien

  evenement.preventDefault();
  mettreAJourEcran();
});

mettreAJourEcran();
