import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./studenthomepage.css";
import StudentPortalHeader from "./StudentPortalHeader";

const StudentHomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/students/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

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

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
        />

        <button
          style={{ marginLeft: "10px" }}
          className="home-button"
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default StudentHomePage;
