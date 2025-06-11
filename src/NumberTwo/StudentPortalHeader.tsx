import { useNavigate } from "react-router-dom";

const StudentPortalHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="home-div" onClick={() => navigate("/portal")}>
      <h1>🏠 Home</h1>
    </div>
  );
};

export default StudentPortalHeader;
