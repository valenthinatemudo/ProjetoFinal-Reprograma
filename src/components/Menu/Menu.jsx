import { Link } from "react-router-dom"
import './menu.styles.css'
import { BiHomeAlt } from 'react-icons/bi'
import { FaWpforms } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'

const Menu = () => {
    return (
        <ul className="menu">
            <li className="home">
                <Link className="home-link" to='/'> <BiHomeAlt className='icon-home' size={30}/> </Link>
            </li>
            <li className="nutri">
                <Link className="nutri-link" to='/nutri'> <FaWpforms className="icon-nutri" size={30}/> 
                </Link>
            </li>
            <li className="autora">
                <Link className="autora-link" to='/autora'> <BsPerson className="icon-autora" size={30}/>
                </Link>
            </li>
        </ul>
    )
}

export default Menu