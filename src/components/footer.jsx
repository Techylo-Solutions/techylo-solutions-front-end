import './FooterStyles.css'
import fb from '../../public/assets/fb-logo.png'
import ln from '../../public/assets/ln-logo.png'

const Footer = () => {
    return(
        <footer className='w-50 h-60'>
            <div>
                <div>

                </div>

                <div>

                </div>

                <div>

                </div>
                
                <div className='flex-row'>
                    <img src={fb} className='w-10' />
                    <img src={ln} className='w-10' />
                </div>
            </div>
        </footer>
    )
}

export default Footer;