import './FooterStyles.css'
import fb from '/assets/fb-logo.png'
import ln from '/assets/ln-logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return(
        <footer className='w-50 h-60 flex flex-col'>
            <div className='flex flex-row h-52 justify-center mt-8'>
                <div className='pr-20'>
                    <h1 className='pb-2 font-semibold'>COMPANY</h1>
                    <ul className='flex flex-col'>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/careers">Careers</NavLink>
                        <NavLink to="/blogs">Blogs</NavLink>
                        <NavLink to="/contactus">Contact us</NavLink>
                    </ul>
                </div>

                <div className='pr-20'>
                    <h1 className='pb-2 font-semibold'>SERVICES</h1>
                    <ul>
                        <li>Web and Mobile Solutions</li>
                        <li>Technical Writing</li>
                        <li>Product Documentation</li>
                        <li>QA and Test Automation</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>
                
                <div className=''>
                    <h1 className='pb-2 font-semibold'>CONECT WITH US</h1>
                    <div className='flex flex-row'>
                        <img src={fb} className='w-8 h-8 mr-2' />
                        <img src={ln} className='w-8 h-8' />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <span>© Techylo Solutions 2024</span>
            </div>
        </footer>
    )
}

export default Footer;