import Nav from "../components/Nav";
import Footer from "../components/Footer"
import ServiceCard from "../components/ServiceCard";
import ServicePoster from '../../public/assets/service-poster.jpg'

const Services = () => {
    return(
        <>
            <Nav />
            <div>
                <img src={ServicePoster} alt="service poster" />
                <div className="absolute top-1/3 w-full font-medium text-6xl pl-12 pt-14">
                    <h1 className="">Services@</h1>
                    <h1 className="">Techylo Solutions</h1>
                    <button onClick={() => scrollToCareerCards(careerCards)} className="transition-colors duration-300 ease-in-out view-positions-button bg-black w-56 h-12 text-lg text-white rounded-lg hover:bg-bluetheme">
                        View Services
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 h-screen">
                <h1>Our Services</h1>
            </div>
            <Footer />
        </>
    )
}

export default Services;