import serviceData from './JSON/serviceCards.json';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ scrollToServiceContainer }) => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 100
        });
    }, []);

    const handleScroll = (index) => {
        scrollToServiceContainer(index);
    };

    return (
        <div className="flex flex-wrap justify-center ml-20" data-aos="fade-in">
            {serviceData.map((service, index) => (
                <div key={index} className='shadow-[0_10px_50px_rgba(0,157,176,0.2)] rounded-3xl h-80 w-80 items-center justify-center mb-16 mr-20'>
                    <h1 className='font-semibold text-lg pl-8 pt-4'>{service.title}</h1>
                    <div className='width-80 flex justify-center'>
                        <img src={"assets/services/icons/" + service.image} className='w-16 mt-6' alt={service.title} />
                    </div>
                    <p className='pl-8 pt-6'>{service.description}</p>
                    <button className="pl-1 pt-14 duration-300 ease-in-out w-48 h-12 text-l hover:text-lg" onClick={() => handleScroll(index)}>
                        Find out more {'->'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ServiceCard;
