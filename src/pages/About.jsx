import Nav from "../components/Nav";
import AboutPoster from "/assets/about/about-poster.jpg"

const About = () => {
    return(
        <>
            <Nav />
            <div className="mt-16">
                <img src={AboutPoster} className="w-1/2 rounded-tl-2xl rounded-br-3xl" />
            </div>
            
         
        </>
    )
}

export default About;