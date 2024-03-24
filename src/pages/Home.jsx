import Nav from '../components/Nav'
const Home = () => {
    return(
        <>
            <Nav />
            <div className="h-screen  flex flex-col justify-center items-center">
                <div className="w-1/2">
                    <h1 className='text-5xl font-lg'>Welcome to</h1>
                    <h1 className='text-7xl font-lg mt-4'>
                        Techylo Solutions
                    </h1>
                    <span className=''>Unlocking Possibilities: Seamless Solutions for Your Digital Success!</span>
                </div>
                <div className="w-1/2">
                    
                </div>
            </div>
         
        </>
    )
}

export default Home;