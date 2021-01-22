import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Kuchisabishii</Link>
      <Link className="links" to="/new-restaurant">
        Add Your Place
      </Link>
    </nav>
  );
}

export default Nav;
