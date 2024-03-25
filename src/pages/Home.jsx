import Nav from '../components/Nav'
import Footer from '../components/Footer';
import Circuit from '/assets/home/circuit.png'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <Nav />
            <div className="h-screen flex justify-center items-center sm:flex-col">
                <div className="w-1/2 sm:w-full sm:h-screen sm:justify-center flex flex-col ml-24">
                    <h1 className='text-5xl font-medium md:text-3xl sm:text-xl'>Welcome to</h1>
                    <h1 className='text-7xl font-lg mt-4 font-medium md:text-4xl sm:text-2xl'>
                        Techylo Solutions
                    </h1>
                    <span className='mt-4 text-2xl font-medium ml-2 md:text-xl sm:text-lg sm:pr-2'>Unlocking Possibilities: Seamless Solutions for Your Digital Success!</span>
                    <NavLink to = "/about" className='mt-4 text-xl ml-2 duration-300 ease-in-out hover:text-2xl'>
                        <span>Learn more {">"}</span>
                    </NavLink>
                </div>
                
                <div className="w-1/2 flex justify-end">
                    <img src={Circuit} className='w-full' />
                </div>
            </div>
            <Footer />
         
        </>
    )
}

export default Home;