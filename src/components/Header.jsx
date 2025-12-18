/**
 * Challenge:
 *
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */

export default function Header() {
  return (
    <header className="header">
      <img className="header-icon" src="/src/imgs/globe.png" alt="globe-icon" />{" "}
      <small className="header-title">my travel journal.</small>
    </header>
  );
}
