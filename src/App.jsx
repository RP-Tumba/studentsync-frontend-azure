import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import StudentProfile from "./pages/StudentProfile";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/student-profile" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
