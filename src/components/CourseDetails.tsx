import { useParams, useNavigate } from 'react-router-dom';
import { courses } from './data';

export default function CourseDetails() {
  const { studentId, courseId } = useParams<{ studentId: string; courseId: string }>();
  const navigate = useNavigate();
  
  if (!studentId || !courseId) {
    return <div>Invalid course or student ID</div>;
  }

  const studentCourses = courses[studentId];
  const course = studentCourses?.find(c => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">{course.name}</h1>
      <div className="course-details">
        <p className="detail-item">
          <span className="detail-label">Description:</span> {course.description}
        </p>
        <p className="detail-item">
          <span className="detail-label">Instructor:</span> {course.instructor}
        </p>
        <p className="detail-item">
          <span className="detail-label">Credits:</span> {course.credits}
        </p>
        <button 
          onClick={() => navigate(`/students/${studentId}`)}
          className="button button-primary"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}