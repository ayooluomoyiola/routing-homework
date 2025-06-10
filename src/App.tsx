import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactBookApp from "./components/ContactBook";
import GitHubRepoSearch from "./components/GitHubRepoSearch";
import "./App.css"
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactBookApp />} />
        <Route path="/github" element={<GitHubRepoSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
