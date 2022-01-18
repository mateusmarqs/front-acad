import Sidebar from './sidebar/index'
import Header from './header/index'
import Contents from './contents/index'
import './style.css'

const Layout = (props) => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className='layout-body'>
                <Header />
                {/* Rever o CSS de Contents (Altura) */}
                <Contents>
                    {props.children}
                </Contents>
            </div>
        </div>
    )
}

export default Layout