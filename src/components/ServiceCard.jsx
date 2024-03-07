import serviceData from './JSON/serviceCards.json'

const ServiceCard = () => {
    return(
        <div className="flex flex-wrap justify-center ml-20">
            {serviceData.map((service, index) => (
                <div key={index} className='shadow-[0_10px_50px_rgba(0,157,176,0.2)] rounded-3xl h-80 w-80 items-center justify-center mb-10 mr-20'>
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                    <button className="transition-colors duration-300 ease-in-out w-48 h-12 text-lg rounded-lg hover:bg-bluetheme">
                Find out more {'->'}
            </button>
                </div>
                
            ))}
        </div>
    )
}

export default ServiceCard