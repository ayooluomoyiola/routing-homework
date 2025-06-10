import { Link } from "react-router-dom";
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="main">
    <h1>Landing Page</h1>
    <nav>
      <Link to="/contact">
        <button>Contact Book</button>
      </Link>
      <Link to="/github">
        <button>GitHub Repo Search</button>
      </Link>
    </nav>
    </div>
  );
};

export default LandingPage;
