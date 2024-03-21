import { useRef } from "react";
import { useState, useEffect } from 'react';
import Nav from "../components/Nav";
import CareerImg from '/assets/career-poster.jpg'
import './CareersStyles.css'
import Card from '../components/CareerCard'
import CareerForm from '../components/CareerForm'
import Footer from '../components/Footer'
import Aos from "aos"
import 'aos/dist/aos.css'

const Careers = () => {

    const [careers, setCareers] = useState([])
    const careerCards = useRef(null)

    useEffect(()=> {
        fetch('http://localhost:8084/careers')
        .then(res => res.json())
        .then(careers => setCareers(careers))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 100
        });
    }, [])

    const hiring = careers.filter(career => career.job_status == 'Hiring')

    const scrollToCareerCards = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return(
        <>
            <Nav />
            <div className="careers-first-container flex space-x-4 w-full mt-16 relative" data-aos="fade-right">
                <div className="w-1/2 justify-center items-center text-center">
                    <img src={CareerImg} className="rounded-br-full career-poster w-full" alt="Techylo Solutions Career" />
                    
                </div>
                <div className="text-6xl w-1/2 flex flex-col justify-center">
                
                    <h1 className="font-medium mb-4">Careers@</h1>
                
                    <h1 className="font-medium mb-8">Techylo Solutions</h1>
                    <button onClick={() => scrollToCareerCards(careerCards)} className="transition-colors duration-300 ease-in-out view-positions-button bg-black w-56 h-12 text-lg text-white rounded-lg hover:bg-bluetheme">
                        View Open Positions
                    </button>
                </div>
            </div>
            {hiring.length > 0 ? (
                <div ref={careerCards} className=" w-full
                bg-gray-100 flex flex-col items-center justify-center h-screen"
                data-aos="fade-in">
                    <h1 className="text-3xl font-semibold text-center pt-24 mb-12">Available Positions</h1>
                    <Card careers={hiring} />
                </div>
            ) : (
                <div ref={careerCards} className=" text-5xl mt-8 bg-gray-100 h-screen flex items-center justify-center"
                data-aos="fade-in">
                    <h1>
                        No vacancies available at the moment
                    </h1>
                    
                </div>
            )}
                
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <CareerForm careers={hiring} />
            </div>
            <Footer />
            
            
         
        </>
    )
}

export default Careers;