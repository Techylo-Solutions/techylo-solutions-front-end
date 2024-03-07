const ServiceCard = () => {
    return(
        <div className="shadow-[0_10px_50px_rgba(0,157,176,0.2)] rounded-3xl h-1/2 w-80 items-center justify-center">
            <button className="transition-colors duration-300 ease-in-out w-48 h-12 text-lg rounded-lg hover:bg-bluetheme">
                Find out more {'->'}
            </button>
        </div>
    )
}

export default ServiceCard