import Briefcase from '../../public/assets/briefcase.png'

const CareerCard = ({careers}) => {
    
    

    return(
        <div className="flex flex-wrap justify-center mb-32">
            {careers.map((career, index) => (
                <div key={index} className="pl-4 ml-4 mr-10 w-96
                 shadow-[0_20px_50px_rgba(0,157,176,0.2)] rounded-3xl border h-40 text-xl bg-white mb-12">
                    <div className='flex mt-4 text-xl'>
                        <img src={Briefcase} className='w-6 mr-4'/>
                        <h1>{career.Job_title}</h1>
                    </div>
                    <div className="mt-4 text-lg">
                        <span className="text-blue mr-4">{career.Job_type}</span>
                    </div>
                    <div className='mt-4 text-lg'>
                        <button className="w-28 h-8 bg-black text-white transition-colors duration-300 ease-in-out apply-now-button rounded-lg hover:bg-greentheme">Apply now</button>
                    </div>
                </div>
            ))}     
            
        </div>
    )
}

export default CareerCard;

