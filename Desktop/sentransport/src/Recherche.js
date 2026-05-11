import "./Recherche.css";

function Recherche({ valeur, onChange, onSubmit }) {
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
      </form>
    </div>
  );
}

export default Recherche;
