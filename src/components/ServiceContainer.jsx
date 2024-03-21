import serviceInfo from './JSON/services.json'

const ServiceContainer = () => {
    return(
        <div>
            {serviceInfo.map((service, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'bg-white' : 'flex-row-reverse bg-gray-100'} w-full pt-32 h-screen`}>
                    <div className='w-1/2 flex flex-wrap pl-16'>
                        <h1 className='text-4xl font-semibold'>{service.title}</h1>
                        <p className='text-lg'>{service.description}</p>
                        <button>Contact us now &dt;</button>
                    </div>
                    <div className='w-1/2 items-center flex justify-center'>
                        <img src = {"assets/services/icons/" + service.image} className='w-1/2 flex justify-center items-center' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceContainer;