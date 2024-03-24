import serviceInfo from './JSON/services.json'
import { NavLink } from "react-router-dom";


const ServiceContainer = () => {
    return(
        <div>
            {serviceInfo.map((service, index) => (
                <div key={index} id={`serviceContainer-${index}`} className={`flex ${index % 2 === 0 ? 'bg-white' : 'flex-row-reverse bg-gray-100'} w-full pt-32 h-screen`}>
                    <div className='w-1/2 flex flex-wrap pl-10'>
                        <h1 className='text-4xl font-semibold'>{service.title}</h1>
                        <p className='text-lg'>{service.description}</p>
                        <NavLink to="/contactus">
                            <button className="text-xl mt-8 duration-300 ease-in-out hover:text-2xl">
                                Contact us now &gt;
                            </button>    
                        </NavLink>
                    </div>
                    <div className='w-1/2 items-center flex justify-center'>
                        <img src = {"assets/services/" + service.image} className='w-1/2 rounded-full flex justify-center items-center' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceContainer;