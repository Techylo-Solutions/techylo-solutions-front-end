import Nav from "../components/Nav";
import AboutPoster from "/assets/about/about-poster.jpg"
import { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import ServiceImage from '/assets/about/service.png'
import JoinUs from '/assets/about/joinus.png'
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const About = () => {

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

    return(
        <>
            <Nav />
            <div className="flex h-screen pt-36 w-full">
                <div className="w-2/3" data-aos="fade-right">
                    <img src={AboutPoster} className="ml-20 w-3/4 rounded-full" />
                </div>
                <div className="pt-48" data-aos="fade-right">
                    <h1 className="text-7xl font-medium">About Us</h1>
                </div>
            </div>
            <div className="h-screen bg-gray-100 flex justify-center items-center" data-aos="fade-in">
                <div className="flex w-2/3 flex-col" data-aos="fade-in">
                    <h1 className="text-4xl"> Welcome to Techylo Solutions</h1>
                    <p className="mt-8 text-2xl ">
                    We started our company in 2018 in Colombo. 
                    We are experts in technology services and help businesses grow online. 
                    Even though our office is in Colombo, our team works from different places 
                    because we believe in working remotely.
                    </p>
                    <div className="flex justify-center">
                        <img src={ServiceImage} className="w-24 mt-8 animate-spin" />
                    </div>
                </div>
            </div>

            <div className="h-screen flex justify-center items-center" data-aos="fade-in">
                <div className="w-2/3">
                    <h1 className="text-4xl">
                        What We Do:
                    </h1>
                    <p className="text-2xl mt-8">
                        Web and Mobile Solutions: We build websites and mobile apps. Our team makes sure they are easy to use, look good, and work well on any device.
                    </p>
                    <p className="text-2xl mt-8">
                        Technical Writing: We write clear instructions and guides to help people understand complex tech stuff.
                    </p>
                    <p className="text-2xl mt-8">
                        Product Documentation: We create detailed guides for products to help users understand how to use them better.
                    </p>
                    <p className="text-2xl mt-8">
                        QA and Test Automation: We check and test software to make sure it works perfectly and doesn’t have any problems.
                    </p>
                    <p className="text-2xl mt-8">
                        Digital Marketing: We help businesses get noticed online. We do things like improving website ranking, managing social media, and creating online ads.
                    </p>
                </div>
            </div>

            <div className="h-screen bg-gray-100 flex justify-center items-center" data-aos="fade-in">
                <div className="flex w-2/3 flex-col" data-aos="fade-in">
                    <h1 className="text-4xl"> Why Choose Us?</h1>
                    <p className="mt-8 text-2xl ">
                        We are a team of experts who love technology and are good at what we do. We believe in making things simple for our clients and helping them succeed online. Choosing Techylo means you get great service and reliable solutions for your business.
                    </p>
                    <p className="mt-8 text-2xl">
                        Let's work together to make your business shine online!
                    </p>
                    <div className="flex justify-center">
                        <img src={JoinUs} className="w-32 mt-8" />
                    </div>
                    <NavLink to="/contactus">
                        <button className="text-xl mt-8 duration-300 ease-in-out hover:text-2xl">
                            Contact us now &gt;
                        </button>    
                    </NavLink>
                </div>
            </div>
            
            <Footer />
         
        </>
    )
}

export default About;