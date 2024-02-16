import Nav from '../components/Nav';
import './HomeStyles.css'
const Home = () => {
    return(
        <>
            <Nav />
            <div className="home-first-container">
                <div className="title-container">
                    <h1 className='text-8xl pl-40 pt-44'>
                        Techylo
                    </h1>
                    <h1 className='text-8xl pl-40 pt-7'> 
                        Solutions
                    </h1>
                </div>
                <div className="image-container">
                    
                </div>
            </div>
         
        </>
    )
}

export default Home;