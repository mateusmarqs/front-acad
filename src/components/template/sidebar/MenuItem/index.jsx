import { Link } from 'react-router-dom'
import './style.css'

const MenuItem = (props) => {
    return (
        <Link to={props.url}>
            <li className='item'>
                <div className='icon'>
                    {props.children}
                </div>               
                {props.title}
            </li>
        </Link>
        
    )
}

export default MenuItem