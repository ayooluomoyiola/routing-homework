import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactBookApp from "./NumberOne/ContactBook";
import GitHubRepoSearch from "./NumberOne/GitHubRepoSearch";
import "./App.css";
import LandingPage from "./NumberOne/LandingPage";
import StudentHomePage from "./NumberTwo/StudentHomePage";
import StudentList from "./NumberTwo/StudentList";
import StudentCourses from "./NumberTwo/StudentCourses";
import StudentCoursePage from "./NumberTwo/StudentCoursePage";
import SearchResults from "./NumberTwo/SearchResults";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/contact" element={<ContactBookApp />} />
          <Route path="/github" element={<GitHubRepoSearch />} />

          <Route path="/portal" element={<StudentHomePage />} />
          <Route path="/students/search" element={<SearchResults />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="students/:studentId" element={<StudentCourses />} />
          <Route
            path="students/:studentId/courses"
            element={<StudentCoursePage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
