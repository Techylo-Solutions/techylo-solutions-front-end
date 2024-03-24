import './FooterStyles.css'
import fb from '/assets/fb-logo.png'
import ln from '/assets/ln-logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return(
        <footer className='w-50 h-60 flex flex-col'>
            <div className='flex flex-row h-52 justify-center mt-8'>
                <div className='pr-32'>
                    <h1 className='pb-2 font-semibold'>COMPANY</h1>
                    <ul className='flex flex-col'>
                        <NavLink to="/about" className='transition-colors duration-200 ease-in-out hover:text-white'>About</NavLink>
                        <NavLink to="/services" className='transition-colors duration-200 ease-in-out hover:text-white'>Services</NavLink>
                        <NavLink to="/careers" className='transition-colors duration-200 ease-in-out hover:text-white'>Careers</NavLink>
                        <NavLink to="/blogs" className='transition-colors duration-200 ease-in-out hover:text-white'>Blogs</NavLink>
                        <NavLink to="/contactus" className='transition-colors duration-200 ease-in-out hover:text-white'>Contact us</NavLink>
                    </ul>
                </div>

                <div className='pr-20'>
                    <h1 className='pb-2 font-semibold'>SERVICES</h1>
                    <ul>
                        <li className='hover:text-white'>Web and Mobile Solutions</li>
                        <li>Technical Writing</li>
                        <li>Product Documentation</li>
                        <li>QA and Test Automation</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>
                
                <div className=''>
                    <h1 className='pb-2 font-semibold'>CONECT WITH US</h1>
                    <div className='flex flex-row'>
                        <a href="https://www.facebook.com/techylosolutions/" target='blank'>
                            <img src={fb} className='w-8 h-8 mr-2 transition-opacity duration-200 ease-in-out hover:opacity-70' />
                        </a>
                        <a href='https://www.linkedin.com/company/techylo-solutions/mycompany/' target='blank'>
                            <img src={ln} className='w-8 h-8 transition-opacity duration-200 ease-in-out hover:opacity-70' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-center mb-2'>
                <span>© Techylo Solutions 2024</span>
            </div>
        </footer>
    )
}

export default Footer;