import './style.css'
import { BiSearchAlt } from 'react-icons/bi';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';

const HeaderClients = () => {
    return (
        <div className='clients-header'>
            <p>Todos clientes</p>
            <div className='clients-search'>
                <input placeholder='Buscar cliente...' type="text" />
                <BiSearchAlt className='clients-iconSearch' size={25}/> 
            </div>
            <button>CADASTRAR</button>
            <div className='clients-filters'>
                <BiMenuAltRight />
                <p>Ordenar</p>
            </div>
            <div className='clients-filters'>
                <FaFilter />
                <p>Filtrar</p>
            </div>
        </div>
    )
}

export default HeaderClients