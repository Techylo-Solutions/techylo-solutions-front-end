import './NavStyles.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className='w-full fixed top-0 z-10'>
            <ul className='flex space-x-4  h-16 justify-center items-center text-lg'>
                <li>
                    <NavLink to="/home" className="nav-links mx-4">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-links mx-4">About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="nav-links mx-4">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/careers" className="nav-links mx-4">Careers</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="nav-links mx-4">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contactus" className="nav-links mx-4">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;