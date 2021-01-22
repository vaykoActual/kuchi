import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Kuchisabishii</Link>
      <Link to="/new-restaurant">New Restaurant</Link>
    </nav>
  );
}

export default Nav;
