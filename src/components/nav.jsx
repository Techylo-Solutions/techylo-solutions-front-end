import './NavStyles.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul class='flex space-x-4 justify-center items-center h-16'>
                <li>
                    <NavLink to="/home" className="inline-block">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="inline-block">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="nav-links">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/careers" className="nav-links">Careers</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="no-underline">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contactus" className="nav-links">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;