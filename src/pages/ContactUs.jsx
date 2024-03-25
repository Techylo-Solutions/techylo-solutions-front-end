import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Mail from "/assets/contact/mail.png" 
import LinkedIn from "/assets/contact/in.png"
import Facebook from "/assets/contact/fb.png"

const ContactUs = () => {
    return(
        <>
            <Nav />
            <div className="h-screen flex justify-center items-center w-full">
                <div className="w-1/4">
                    
                </div>
                <div className="flex justify-center items-center mt-16 w-1/2 h-screen">
                    <ContactForm />
                </div>
                <div className="w-1/4 flex flex-col justify-center">
                    <div className="flex">
                        <img src={Mail} className="w-10 mb-6"/>
                        <span className="mt-2 ml-2 font-bold">    
                            techylosolutions@gmail.com                    
                        </span>
                    </div>
                    <a href='https://www.linkedin.com/company/techylo-solutions/mycompany/' target='blank'>
                        <div className="flex">
                            <img src={LinkedIn} className="w-10 mb-6 transition-opacity duration-200 ease-in-out hover:opacity-70"/>
                            <span className="mt-3 ml-3 font-bold transition-opacity duration-200 ease-in-out hover:opacity-70">
                                in/techylo-solutions
                            </span>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/techylosolutions/" target='blank'>
                        <div className="flex">
                            <img src={Facebook} className="w-10 mb-6 mt-2 transition-opacity duration-200 ease-in-out hover:opacity-70"/>
                            <span className="mt-5 ml-3 font-bold transition-opacity duration-200 ease-in-out hover:opacity-70">fb/techylosolutions</span>
                        </div>
                    </a>
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;