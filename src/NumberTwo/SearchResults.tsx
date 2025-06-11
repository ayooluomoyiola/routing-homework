import { useLocation, useNavigate } from "react-router-dom";
import { students } from "./data";
import StudentPortalHeader from "./StudentPortalHeader";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query =
    new URLSearchParams(location.search).get("query")?.toLowerCase() ?? "";

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(query)
  );

  return (
    <div className="student-body">
      <StudentPortalHeader />
      <h2>Search Results for: "{query}"</h2>

      {filtered.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="student-main">
          {filtered.map((student) => (
            <div key={student.id} className="student-card">
              <p
                style={{
                  fontWeight: "700",
                  marginBottom: "5px",
                  marginTop: "0px",
                }}
              >
                {student.name}
              </p>
              <p style={{ marginTop: "0px" }}>{student.grade}</p>
              <button
                className="student-button"
                onClick={() => navigate(`/students/${student.name}`)}
              >
                View Courses
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
