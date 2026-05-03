import "./Statistique.css";

function Statistique() {
  const stats = {
    lignes: 10,
    arrets: 150,
  };

  return (
    <section className="statistique">
      <h2>Statistiques</h2>

      <div className="cards">
        <div className="card">
          <h3>{stats.lignes}</h3>
          <p>Lignes de bus</p>
        </div>

        <div className="card">
          <h3>{stats.arrets}</h3>
          <p>Arrêts</p>
        </div>
      </div>
    </section>
  );
}

export default Statistique;
