import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentProfileForm from './pages/StudentProfile';

import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import './App.css';
import FooterPart from './pages/Footer.jsx';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* <Route path="/" element={<StudentList />} /> */}
            <Route path="/student-profile" element={<StudentProfileForm />} />
            <Route path="/pages" element={<StudentList />} />
          </Routes>
        </main>
        <FooterPart />
      </div>
    </Router>
  );
};

export default App;
