# TEST-AP — Calculatrice

Une petite calculatrice en HTML, CSS et JavaScript, sans aucune installation.

## Lancer l'application

Ouvre simplement `index.html` dans ton navigateur (double-clic sur le fichier).

## Application Windows 11

La calculatrice existe aussi en vrai programme Windows (grâce à Electron).

**Télécharger la version prête à l'emploi :**
1. Sur GitHub, ouvre l'onglet **Actions** du dépôt.
2. Clique sur la dernière exécution « Application Windows » (coche verte ✅).
3. En bas, dans **Artifacts**, télécharge `Calculatrice-Windows`.
4. Décompresse le fichier ZIP et double-clique sur `Calculatrice.exe`.

> Au premier lancement, Windows peut afficher « Windows a protégé votre ordinateur »
> (l'application n'est pas signée). Clique sur **Informations complémentaires**
> puis **Exécuter quand même**.

**La construire toi-même** (il faut installer [Node.js](https://nodejs.org)) :

```
npm install
npm start               # lance l'application pour la tester
npm run build:windows   # crée dist/Calculatrice-win32-x64/Calculatrice.exe
```

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
- `main.js` — ouvre la fenêtre de l'application Windows (Electron)
- `package.json` — la configuration et les commandes `npm`
- `.github/workflows/windows.yml` — construit automatiquement le `.exe` sur GitHub
