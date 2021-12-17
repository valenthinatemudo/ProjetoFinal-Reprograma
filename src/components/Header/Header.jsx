import './header.styles.css'
import FotoMao from '../../assets/img1.jpg'

const Header = () => {
    return (
        <header classname='header'>
            <h1 className='titulo-header'>Alimentação básica para todos!</h1>
            <img src={FotoMao} align='left' className='foto-header' alt='foto de uma mao'/>
        </header>
    )
}
export default Header