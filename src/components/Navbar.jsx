import { Link } from 'react-router-dom';
import StudentList from '../pages/StudentList.jsx';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drops = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="logo">
        <h1>L:Tumba College</h1>
      </div>
      <div className="icon" onClick={drops}>
        <MenuIcon />
      </div>

      <div className={`links ${isOpen ? 'menu' : ''}`}>
        <Link to="/">
          <button className="button-3">Home</button>
        </Link>{' '}
        <button className="button-1">Add Student</button>
        <Link to="/pages">
          <button className="button-2">All Students</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
