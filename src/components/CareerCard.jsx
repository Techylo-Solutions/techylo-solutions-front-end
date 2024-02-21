import Briefcase from '../../public/assets/briefcase.png'

const CareerCard = () => {
    return(
        <div className="pl-4 ml-4 shadow-xl rounded-3xl flex-row border w-1/4 h-40 text-xl bg-white">
            <div className='flex mt-4 text-xl'>
                <img src={Briefcase} className='w-6 mr-4'/>
                <h1 clas>Associate Technical Writer</h1>
            </div>
            <div className="mt-4 text-lg">
                <span className="text-blue mr-4">Full-time</span>
            </div>
            <div className='mt-4 text-lg'>
                <button className="w-28 h-8 bg-black text-white transition-colors duration-300 ease-in-out apply-now-button rounded-lg hover:bg-greentheme">Apply now</button>
            </div>
        </div>
    )
}

export default CareerCard;