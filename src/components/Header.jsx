import globeIcon from "../imgs/globe.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header-icon" src={globeIcon} alt="globe-icon" />
      <small className="header-title">my travel journal.</small>
    </header>
  );
}
