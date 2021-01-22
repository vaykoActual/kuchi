import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Kuchisabishii</Link>
      <Link className="links" to="/new-restaurant">
        New Restaurant
      </Link>
    </nav>
  );
}

export default Nav;
