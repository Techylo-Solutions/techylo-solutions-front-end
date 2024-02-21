import Nav from "../components/Nav";
import CareerImg from '/assets/career-poster.jpg'
import './CareersStyles.css'
import Card from '../components/CareerCard'
import CareerForm from '../components/CareerForm'
import Footer from '../components/Footer'

const Careers = () => {
    return(
        <>
            <Nav />
            <div className="careers-first-container flex space-x-4 w-full mt-16 relative">
                <div className="w-1/2 justify-center items-center text-center">
                    <img src={CareerImg} className="rounded-br-full career-poster w-full" alt="Techylo Solutions Career" />
                    
                </div>
                <div className="text-5xl w-1/2 flex flex-col justify-center">
                
                    <h1 className="font-medium mb-4">Careers@</h1>
                
                    <h1 className="font-medium mb-8">Techylo Solutions</h1>
                    <button className="transition-colors duration-300 ease-in-out view-positions-button bg-black w-56 h-12 text-lg text-white rounded-lg hover:bg-bluetheme">
                        View Open Positions
                    </button>
                </div>
            </div>
            <div className="h-screen w-full bg-gray-100 flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center pt-10 mb-14">Available Positions</h1>
                <Card />
            </div>
            <div className="flex flex-col items-center">
                <CareerForm />
                hi
            </div>
            <Footer />
            
            
         
        </>
    )
}

export default Careers;