import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./studentcoursepage.css";
import StudentPortalHeader from "./StudentPortalHeader";

const StudentCoursePage = () => {
  const { studentId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.selectedCourse;

  if (!course) return <p>No course selected.</p>;

  return (
    <div className="course-page">
      <StudentPortalHeader />
      <h2>
        {course.code}: {course.title}
      </h2>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Student:</strong> {studentId}
      </p>
      <button className="course-button" onClick={() => navigate(-1)}>
        🔙 Back
      </button>
    </div>
  );
};

export default StudentCoursePage;
