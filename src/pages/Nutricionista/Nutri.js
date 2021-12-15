import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import './nutri.styles.css'

const Nutri = () => {
    return (
        <div>
            <Menu />
            <header>
                <h1 className="titulo-nutri">Cadastro para se tornar um nutricionista voluntário:</h1>
            </header>
            <section className="section-frame">
            <iframe className="frame" src="https://docs.google.com/forms/d/e/1FAIpQLSc_DW4ysLOnTyrBMKQVoXnGnEiKX6gkXHHJAZH-SGxqDbM9fA/viewform?embedded=true" width="640" height="947" frameborder="0"  title='myframe'></iframe>
            </section>
            <Footer />
        </div>
    )
}

export default Nutri