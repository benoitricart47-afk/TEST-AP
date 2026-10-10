# TEST-AP — Calculatrice

Une petite calculatrice en HTML, CSS et JavaScript, sans aucune installation.

## Lancer l'application

Ouvre simplement `index.html` dans ton navigateur (double-clic sur le fichier).

## Fonctionnalités

- Les 4 opérations : `+`, `−`, `×`, `÷`
- Nombres à virgule, pourcentage `%`, effacement `C` et retour arrière `⌫`
- Division par zéro → affiche « Erreur »
- Utilisable aussi au clavier de l'ordinateur :

| Touche | Action |
|---|---|
| `0`–`9` | chiffres |
| `+` `-` `*` `/` | opérations |
| `,` ou `.` | virgule |
| `Entrée` ou `=` | résultat |
| `Retour arrière` | effacer le dernier chiffre |
| `Échap` | tout effacer |

> Comme une calculatrice de poche, les calculs se font dans l'ordre de saisie :
> `12 + 7 × 2` donne `38` (et non `26`).

## Les fichiers

- `index.html` — la structure de la page (l'écran et les boutons)
- `style.css` — l'apparence (couleurs, grille des boutons)
- `script.js` — la logique (ce qui se passe quand on appuie sur un bouton)
