import { useState, useEffect } from "react";
import "./App.css";
import DetailLigne from "./DetailLigne";
import Header from "./Header";
import Recherche from "./Recherche";
import Footer from "./Footer";
import LigneBus from "./LigneBus";
import Compteur from "./Compteur";
// import ListeLignes from "./ListeLignes";

function App() {
  const [compteur, setCompteur] = useState(0);
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);
  const [recherche, setRecherche] = useState("");

  const [lignes, setLignes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  // 2. Charger les données au démarrage
  useEffect(() => {
    fetch("http://localhost:5000/lignes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur serveur : " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setLignes(data);
        setChargement(false);
      })
      .catch((error) => {
        setErreur(error.message);
        setChargement(false);
      });
  }, []);

  // 3. Le reste ne change pas (filtre, clic, etc.)

  const lignesFiltrees = lignes.filter(
    (ligne) =>
      ligne.depart.toLowerCase().includes(recherche.toLowerCase()) ||
      ligne.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
      ligne.numero.includes(recherche),
  );
  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null); // re - clic = deselectioner
    } else {
      setLigneSelectionnee(ligne); // premier clic = selectionner
    }
  }
  if (chargement) {
    return (
      <div className="App">
        <Header />

        <main className="contenu">
          <p className="message-chargement">Chargement des lignes...</p>
        </main>
      </div>
    );
  }

  // Écran d'erreur
  if (erreur) {
    return (
      <div className="App">
        <Header />

        <main className="contenu">
          <div className="message-erreur">
            <p>Impossible de charger les lignes.</p>

            <p className="erreur-detail">{erreur}</p>

            <p>Vérifiez que le serveur Flask est lancé (python api/app.py).</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <Recherche
          valeur={recherche}
          onChange={setRecherche}
          onSubmit={() => setCompteur(compteur + 1)}
        />
        <Compteur valeur={compteur} />

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? "s" : ""}{" "}
          trouvée
          {lignesFiltrees.length > 1 ? "s" : ""}
        </p>
        {lignesFiltrees.length === 0 ? (
          <p className="aucun-resultat">Aucune ligne trouvée</p>
        ) : (
          lignesFiltrees.map((ligne) => (
            <LigneBus
              key={ligne.id}
              numero={ligne.numero}
              depart={ligne.depart}
              arrivee={ligne.arrivee}
              arrets={ligne.arrets}
              estSelectionnee={
                ligneSelectionnee && ligneSelectionnee.id === ligne.id
              }
              onClick={() => handleClickLigne(ligne)}
            />
          ))
        )}

        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
