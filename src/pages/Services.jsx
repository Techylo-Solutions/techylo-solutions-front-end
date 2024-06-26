import Nav from '../components/Nav';
import { useRef, useEffect } from 'react';
import Footer from '../components/Footer';
import ServicePoster from '/assets/services/service-poster.jpg';
import ServiceCard from '../components/ServiceCard';
import ServiceContainer from '../components/ServiceContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const serviceCards = useRef(null);
    const serviceContainers = useRef([]);

    const scrollToServiceCards = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const scrollToServiceContainer = (index) => {
        const containerRef = serviceContainers.current;
        if (containerRef) {
            const targetContainer = containerRef.querySelector(`#serviceContainer-${index}`);
            if (targetContainer) {
                window.scrollTo({
                    top: targetContainer.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 100
        });
    }, []);

    return (
        <>
            <Nav />
        <div>
            <img src={ServicePoster} alt="service poster" />
            <div className="absolute top-1/3 w-full font-medium text-6xl pl-12 pt-14" data-aos="fade-in">
                <h1 className="">Services@</h1>
                <h1 className="">Techylo Solutions</h1>
                <button onClick={() => scrollToServiceCards(serviceCards)} className="transition-colors duration-300 ease-in-out view-positions-button bg-black w-48 h-12 text-lg text-white rounded-lg hover:bg-bluetheme">
                    View Services
                </button>
            </div>
        </div>
        <div ref={serviceCards} className="bg-gray-100 flex flex-col items-center justify-center pt-24">
            <h1 className="text-3xl font-semibold text-center mb-12">Our Services</h1>
            <ServiceCard scrollToServiceContainer={scrollToServiceContainer} />
        </div>
        <div ref={serviceContainers} className="services-container">
            <ServiceContainer />
        </div>
        <Footer />
        </>
    );
};

export default Services;
