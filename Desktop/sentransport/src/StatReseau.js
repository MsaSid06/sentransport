import "./StatReseau.css";

function StatReseau({ lignes }) {
  const totalLignes = lignes.length;

  const totalArrets = lignes.reduce((total, ligne) => {
    return total + ligne.arrets;
  }, 0);

  const maxArrets = Math.max(...lignes.map((ligne) => ligne.arrets));

  const ligneMax = lignes.find((ligne) => ligne.arrets === maxArrets);

  return (
    <div className="stat-reseau">
      <div>Nombre total de lignes : {totalLignes}</div>

      <div>Nombre total d'arrêts : {totalArrets}</div>

      <div>
        Ligne avec le plus d'arrêts : {ligneMax.numero} avec ({ligneMax.arrets}{" "}
        arrets)
      </div>
    </div>
  );
}

export default StatReseau;
