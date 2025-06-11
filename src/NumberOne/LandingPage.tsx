import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <h1>Landing Page</h1>
      <nav>
        <Link to="/contact">
          <button className="button">Contact Book</button>
        </Link>
        <Link to="/github">
          <button className="button">GitHub Repo Search</button>
        </Link>
        <Link to="/portal">
          <button className="button">Student Portal</button>
        </Link>
      </nav>
    </div>
  );
};

export default LandingPage;
