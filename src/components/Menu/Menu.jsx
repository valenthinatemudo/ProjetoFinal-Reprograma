import { Link } from "react-router-dom"
import './menu.styles.css'

const Menu = () => {
    return (
        <ul className="menu">
            <li className="home">
                <Link className="home-link" to='/'>Home</Link>
            </li>
            <li className="nutri">
                <Link className="nutri-link" to='/nutri'>Nutri</Link>
            </li>
            <li className="autora">
                <Link className="autora-link" to='/autora'>Autora</Link>
            </li>
        </ul>
    )
}

export default Menu