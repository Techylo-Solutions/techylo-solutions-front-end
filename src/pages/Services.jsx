import Nav from "../components/Nav";
import { useRef } from "react";
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard";
import ServicePoster from '../../public/assets/services/service-poster.jpg'

const Services = () => {

    const serviceCards = useRef(null)

    const scrollToServiceCards = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return(
        <>
            <Nav />
            <div>
                <img src={ServicePoster} alt="service poster" />
                <div className="absolute top-1/3 w-full font-medium text-6xl pl-12 pt-14">
                    <h1 className="">Services@</h1>
                    <h1 className="">Techylo Solutions</h1>
                    <button onClick={() => scrollToServiceCards(serviceCards)} className="transition-colors duration-300 ease-in-out view-positions-button bg-black w-48 h-12 text-lg text-white rounded-lg hover:bg-bluetheme">
                        View Services
                    </button>
                </div>
            </div>
            <div ref={serviceCards} className="bg-gray-100 h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold text-center pt-24 mb-12">Our Services</h1>
                <ServiceCard />
            </div>
            <Footer />
        </>
    )
}

export default Services;