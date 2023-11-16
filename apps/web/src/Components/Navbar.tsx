import {useState}from 'react'; 
import '../styles/navbar.css';
import {FaBars} from 'react-icons/fa6';
import {Link} from 'react-scroll';

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  return (
    <div>
          <nav className='Navbar'>
              <div className="menu-icon" onClick={handleShowNavbar}>
                  <FaBars />
              </div>
              <div className={`nav-elements nav-item  ${showNavbar && 'active'}`}>
                  <ul>
                      <li>
                          <Link to="" className='nav_link'> Inicio </Link>
                      </li>
                      <li>
                          <Link to="" className='nav_link'> About Us </Link>
                      </li>
                      <li>
                          <Link to="" className='nav_link'> Info </Link>
                      </li>
                  </ul>
              </div>
          </nav>
      
    </div>
  )
}

export default Navbar;
