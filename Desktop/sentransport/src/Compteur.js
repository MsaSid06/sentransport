import "./Compteur.css";

const Compteur = ({ valeur }) => {
  return <p className="Compteur">Nombre de recherches effectuées: {valeur}</p>;
};

export default Compteur;
