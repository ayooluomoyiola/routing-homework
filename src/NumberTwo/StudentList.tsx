import { students } from "./data";
import "./studentlist.css";
import { useNavigate } from "react-router-dom";
import StudentPortalHeader from "./StudentPortalHeader";

const StudentList = () => {
  const navigate = useNavigate();

  return (
    <div className="student-body">
      <StudentPortalHeader />
      <h1>Students</h1>
      <div className="student-main">
        {students.map((student) => (
          <div className="student-card">
            <p style={{ fontWeight: "700" }}>{student.name}</p>
            <p style={{ marginTop: "0px" }}>Grade {student.grade}</p>
            <button
              className="student-button"
              onClick={() =>
                navigate(`/students/${encodeURIComponent(student.name)}`)
              }
            >
              View Courses
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
