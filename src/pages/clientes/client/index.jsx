import './style.css'
import imgMateus from '../../../assets/images/mateus.jpg'
import { GiHamburgerMenu } from 'react-icons/gi';



const Client = (props) => {
    return(
        <li className='client'>
            <div className='faceClient'>
                <img className='client-image' src={imgMateus} width={40} height={40}/>
                <div className='client-name'>
                    <p>{props.name}</p>
                    <span>Presente a 4 meses atrás</span>
                </div>
            </div>
            <div>
                <p>{props.instructor}</p>
                <span>Desde 24/04/2021</span>
            </div>
            <div>
                <p>Jun 26, 2021</p>
                <span>6:30 PM</span>
            </div>
            <div>
                <button>{props.status}</button>
            </div>
            <div>
                <GiHamburgerMenu className='menu-client-icon'/>
            </div>
        </li>
    )
}

export default Client