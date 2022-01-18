import './style.css'
import MenuItem from './MenuItem/index'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiFillDashboard } from 'react-icons/ai'


const Sidebar = () => {
    return (
        <div className='bg'>
            <ul className='menuItems'>
                <MenuItem url='/' title='Dashboard'>
                    <AiFillDashboard />
                </MenuItem>
                <MenuItem url='/clientes' title='Clientes'>
                    <BsFillPeopleFill />
                </MenuItem>
                <MenuItem url='/agenda' title='Agenda'>
                    <FaCalendarAlt />
                </MenuItem>
            </ul>
        </div>
    )
}

export default Sidebar