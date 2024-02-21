import './FooterStyles.css'
import fb from '../../public/assets/fb-logo.png'
import ln from '../../public/assets/ln-logo.png'

const Footer = () => {
    return(
        <footer className='w-50 h-60 flex flex-col'>
            <div className='flex flex-row h-52'>
                <div>
                    <h1>COMPANY</h1>
                </div>

                <div>
                    <h1>SERVICES</h1>
                </div>

                <div>

                </div>
                
                <div className=''>
                    <h1>CONECT WITH US</h1>
                    <div className='flex flex-row'>
                        <img src={fb} className='w-8 h-8 mr-2' />
                        <img src={ln} className='w-8 h-8' />
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <span>© Techylo Solutions 2024</span>
            </div>
        </footer>
    )
}

export default Footer;