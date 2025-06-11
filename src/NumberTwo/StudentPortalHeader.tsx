import { useNavigate } from "react-router-dom";

const StudentPortalHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="home-div" onClick={() => navigate("/portal")}>
      <h1>🏠 Home</h1>
      <button
        className="header-button"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
      >
        Landing Page
      </button>
    </div>
  );
};

export default StudentPortalHeader;
