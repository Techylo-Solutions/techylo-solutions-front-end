import Nav from '../components/Nav'
const Home = () => {
    return(
        <>
            <Nav />
            <div className="h-screen  flex flex-col justify-center items-center">
                <div className="w-1/2 flex flex-col">
                    <h1 className='text-5xl font-medium'>Welcome to</h1>
                    <h1 className='text-7xl font-lg mt-4 font-medium'>
                        Techylo Solutions
                    </h1>
                    <span className='mt-4 text-2xl ml-2'>Unlocking Possibilities: Seamless Solutions for Your Digital Success!</span>

                </div>
                
                <div className="w-1/2">
                    
                </div>
            </div>
            <Footer />
         
        </>
    )
}

export default Home;