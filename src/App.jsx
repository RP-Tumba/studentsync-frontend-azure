import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentProfileForm from './pages/StudentProfile';
import './App.css';
import FooterPart from './pages/Footer.jsx';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';

import LandingPage from './pages';
import Addstudent from './pages/Add_student.jsx';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/student-profile" element={<StudentProfileForm />} />
            <Route path="/pages" element={<StudentList />} />
            <Route path="/Add_student" element={<Addstudent />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        <FooterPart />
      </div>
    </Router>
  );
};

export default App;
