import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
// import "./App.css";
import LandingPage from "./pages";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/list" element={<StudentList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
