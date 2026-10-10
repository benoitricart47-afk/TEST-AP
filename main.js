// Point d'entrée de l'application de bureau (Electron).
// Il ouvre une fenêtre qui affiche index.html, comme un navigateur.
const { app, BrowserWindow } = require("electron");
const path = require("path");

function creerFenetre() {
  const fenetre = new BrowserWindow({
    width: 380,
    height: 600,
    resizable: false,
    title: "Calculatrice",
    backgroundColor: "#1e1f26",
    autoHideMenuBar: true, // cache la barre de menu Fichier / Édition...
  });

  fenetre.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(creerFenetre);

// Sous Windows, fermer la fenêtre quitte l'application
app.on("window-all-closed", () => app.quit());
