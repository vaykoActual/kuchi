import { Link } from "react-router-dom";

import "./HomePage.css";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>Kuchisabishii</button>
      </Link>
      <Link className="links" to="/new-restaurant">
        <button> Add Your Place </button>
      </Link>
    </nav>
  );
}

export default Nav;
