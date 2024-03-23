import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactUs = () => {
    return(
        <>
            <Nav />
            <div className="h-screen flex justify-center items-center">
                <div>
                    icon
                </div>
                <div className="flex justify-center items-center mt-16 w-1/2 border border-collapse h-screen">
                    <ContactForm />
                </div>
                <div>
                    social
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;