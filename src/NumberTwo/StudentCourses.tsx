import { useNavigate, useParams } from "react-router-dom";
import { students } from "./data";
import "./studentcourses.css";
import StudentPortalHeader from "./StudentPortalHeader";

const StudentCourses = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const student = students.find(
    (s) =>
      s.name.toLowerCase() === decodeURIComponent(studentId ?? "").toLowerCase()
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
    <div className="courses-main">
      <StudentPortalHeader />
      <h2>{student.name}'s Courses</h2>
      <div className="courses-list">
        {student.courses.map((course) => (
          <div key={course.code} className="courses-card">
            <p style={{ fontWeight: "500", fontSize: "1.5rem", marginBottom:"0px"}}>
              {course.code} - {course.title}
            </p>
            <p style={{ marginTop:"5px", marginBottom:"30px"}}>{course.description}</p>
            <button
              className="courses-button"
              onClick={() =>
                navigate(
                  `/students/${encodeURIComponent(student.name)}/courses`,
                  { state: { selectedCourse: course } }
                )
              }
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
