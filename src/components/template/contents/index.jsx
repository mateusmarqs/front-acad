import './style.css'

const Contents = (props) => {
    return (
        <div className='contents'>
            {props.children}
        </div>
    )
}

export default Contents