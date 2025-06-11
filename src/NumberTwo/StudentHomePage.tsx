import { useNavigate } from "react-router-dom";
import "./studenthomepage.css";
import StudentPortalHeader from "./StudentPortalHeader";

const StudentHomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-main">
      <StudentPortalHeader />
      <h1 style={{ fontSize: "100px" }}>🎓 Student Portal</h1>

      <div className="home-search">
        <button
          style={{ marginRight: "40px" }}
          className="home-button"
          onClick={() => navigate("/students")}
        >
          📚 View All Students
        </button>
        <input type="text" />
        <button style={{ marginLeft: "10px" }} className="home-button">
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default StudentHomePage;
