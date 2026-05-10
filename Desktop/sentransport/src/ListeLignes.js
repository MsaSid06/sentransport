import LigneBus from "./LigneBus";
import StatReseau from "./StatReseau.js";
import "./ListeLignes.css";

function ListeLignes({ lignes }) {
  return (
    <div className="liste-lignes">
      <StatReseau lignes={lignes} />
      <h2 className="liste-titre">Lignes Dakar Dem Dikk</h2>

      <p className="liste-description">{lignes.length} lignes disponibles</p>

      {lignes.map((ligne) => (
        <LigneBus
          key={ligne.id}
          couleur={ligne.couleur}
          numero={ligne.numero}
          depart={ligne.depart}
          arrivee={ligne.arrivee}
          arrets={ligne.arrets}
        />
      ))}
    </div>
  );
}

export default ListeLignes;
