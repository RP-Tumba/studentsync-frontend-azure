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
    const ur = './public/index.png';
  return (
    <nav>
      <Link to="/" className='no-line'>
      <div className="logo">
        <h1><img src={ur} alt="rp logo" /> Tumba College</h1>
      </div>
    </Link>
      <div className="icon" onClick={drops}>
        <MenuIcon />
      </div>
      <div className={`links ${isOpen ? 'menu' : ''}`}>
        <Link to="/">
          <button className="button-3">Home</button>
        </Link>{' '}
        <Link to="/pages">
          <button className="button-1">Add Student</button>
        </Link>
        <Link to="/pages">
          <button className="button-2">All Students</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
