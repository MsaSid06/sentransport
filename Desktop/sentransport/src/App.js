import { useState } from "react";
import "./App.css";
import DetailLigne from "./DetailLigne";
import Header from "./Header";
import Recherche from "./Recherche";
// import ListeLignes from "./ListeLignes";
import Footer from "./Footer";
import LigneBus from "./LigneBus";
import Compteur from "./Compteur";

function App() {
  const [compteur, setCompteur] = useState(0);
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);
  const [recherche, setRecherche] = useState("");
  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      couleur: "Red",
      listeArrets: [
        "Parcelles U14",
        "Parcelles U10",
        "Camberene",
        "Patte d'Oie",
        "Grand Dakar",
        "Colobane",
        "Ponty",
        "Plateau",
      ],
    },

    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obe",
      arrets: 18,
      couleur: "Blue",
      listeArrets: [
        "Guediawaye",
        "Pikine",
        "Thiaroye",
        "Keur Massar",
        "Grand Yoff",
        "Parcelles",
        "Liberte 6",
        "Place Obe",
      ],
    },

    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      couleur: "Green",
      listeArrets: [
        "Pikine Centre",
        "Thiaroye Gare",
        "Hann",
        "Colobane",
        "Fass",
        "Medina",
      ],
    },

    {
      id: 4,
      numero: "23",
      depart: "Ouakam",
      arrivee: "Grand Dakar",
      arrets: 10,
      couleur: "Yellow",
      listeArrets: [
        "Ouakam Village",
        "Mermoz",
        "Fann",
        "Point E",
        "Liberte 5",
        "Grand Dakar",
      ],
    },

    {
      id: 5,
      numero: "8",
      depart: "Almadies",
      arrivee: "Colobane",
      arrets: 16,
      couleur: "Purple",
      listeArrets: [
        "Almadies",
        "Ngor",
        "Yoff",
        "Ouest Foire",
        "Liberte 6",
        "Colobane",
      ],
    },

    {
      id: 6,
      numero: "12",
      depart: "Yoff",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "Orange",
      listeArrets: [
        "Yoff Village",
        "Aeroport LSS",
        "Parcelles U17",
        "Grand Yoff",
        "HLM",
        "Sandaga",
      ],
    },
  ];

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
