import serviceInfo from './JSON/services.json'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServiceContainer = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 100
        });
    }, []);

    return(
        <div>
            {serviceInfo.map((service, index) => (
                <div key={index} id={`serviceContainer-${index}`} className={`flex justify-center items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} w-full h-screen`}>
                    <div className='w-2/3 flex flex-wrap pl-10' data-aos="fade-in">
                        <h1 className='text-4xl font-semibold'>{service.title}</h1>
                        <p className='text-lg mt-8'>{service.description}</p>
                        <div className='mt-8 w-full flex justify-center'>
                            <img src={"/assets/services/icons/" + service.image} className={`w-24 animate-pulse`} />
                        </div>
                        <NavLink to="/contactus" className="mt-4 w-full flex items-center justify-center">
                            <button className="text-xl mt-8 duration-300 ease-in-out hover:text-2xl">
                                Contact us now &gt;
                            </button>    
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceContainer;