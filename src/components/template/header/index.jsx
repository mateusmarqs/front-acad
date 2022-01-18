import './style.css'
import logoAlfa from '../../../assets/images/logoAlfa.png'
import { MdNotifications } from 'react-icons/md'

const Header = () => {
    return (
        <div className='header'>
            <p className='title'>Clientes</p>
            <div className='info'>
                <MdNotifications size={23} className='notification' />
                <div className='divisor'></div>
                <span className='name'>Espaço de Treinamento ALFA</span>
                    <img src={logoAlfa} className="image" alt="logo" width={45} height={45}/> 
            </div>
        </div>
    )
}

export default Header