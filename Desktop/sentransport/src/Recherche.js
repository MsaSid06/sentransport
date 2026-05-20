import "./Recherche.css";

function Recherche({ valeur, onChange, onSubmit, chargerLignes }) {
  return (
    <div className="recherche">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          className="recherche-input"
          placeholder="Rechercher une ligne (depart, arrivee)..."
          value={valeur}
          onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={() => onChange("")} className="recherche-btn">
          Effacer
        </button>

        <button
          onClick={chargerLignes}
          className="recherche-btn"
          style={{ backgroundColor: "blue" }}
        >
          Recharger
        </button>
      </form>
    </div>
  );
}

export default Recherche;
