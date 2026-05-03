import "./Header.css";

function Header() {
  const today = new Date().toLocaleDateString("fr-FR");

  return (
    <header className="header">
      <h1 className="header-title">SenTransport</h1>
      <p className="header-subtitle">{today}</p>
    </header>
  );
}

export default Header;
