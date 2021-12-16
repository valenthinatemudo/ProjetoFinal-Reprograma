import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import './nutri.styles.css'

const Nutri = () => {
    return (
        <div>
            <Menu />
               <header>
                   <div>
                        <div className="img-nutri">
                            <h1 className="titulo-nutri">Nutricionista voluntário</h1>
                
                            <p className="paragrafo-nutri">
                                Quer se tornar um nutricionista voluntário atendendo e ajudando a população mais carente?
                                Juntos podemos levar informações à essa população, explicando a eles o que seria uma alimentação mais saudável e adequada! Caso tenha interesse de participar desse projeto, faça seu cadastro aqui embaixo!
                            </p>
                        </div>
                    </div>
                </header>
                <section className="section-frame">
                    <iframe className="frame" src="https://docs.google.com/forms/d/e/1FAIpQLSc_DW4ysLOnTyrBMKQVoXnGnEiKX6gkXHHJAZH-SGxqDbM9fA/viewform?embedded=true" width="640" height="947" frameborder="0"  title='myframe'></iframe>
                </section>
            
            <Footer />
        </div>
    )
}

export default Nutri