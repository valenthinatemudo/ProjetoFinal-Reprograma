import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './home.styles.css'
import FotoUm from '../../assets/img1.jpg'

const Home = () => {
    return (
        <div>
            <Menu />
            <Header />
           <section>
                <p className="paragrafo-um">
                Mais da metade da população brasileira — 116 milhões de pessoas — vive com algum grau de insegurança alimentar. Ao menos 19 milhões estão passando fome, situação agravada pela pandemia e pela crise econômica do país. Os dados são de levantamento da Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede Penssan).
                Há muitas consequências decorrentes da insegurança alimentar e da fome, elas envolvem problemas de saúde que se transformam em mazelas sociais, econômicas e educacionais e podem ser irreversíveis, sobretudo nas crianças.
                </p>
           </section>
            <section className="section-foto"> 
                <p className="paragrafo-dois">
                Ao mesmo tempo em que 116 milhões de brasileiros não têm comida suficiente ou passam fome, o Brasil é o décimo país que mais desperdiça alimentos no dia a dia, segundo ranking da FAO (Organização das Nações Unidas para Agricultura e Alimentação) com 54 países, feito pelo Pnuma (Programa das Nações Unidas para o Meio Ambiente) e pela organização britânica de resíduos WRAP.
                
                Se evitasse o desperdício, o Brasil poderia reduzir a fome em até 30%, de acordo com a FAO.
                </p>
                <img align='right' className="foto-um" src={FotoUm} alt="Foto mãos" />
            </section>
            <section className="section-dados">
                <header>
                    <h1 className="titulo-dados">Dados:</h1>
                    </header>
                    <ul className="lista-dados">
                        <li>
                             116,8 milhões (55%)passaram a conviver com algum grau de insegurança alimentar após a pandemia.
                        </li>
                        <li>
                            54,5 milhões (26%) não têm acesso a uma dieta nutritiva adequada.
                        </li>
                        <li>
                            43,4 milhões (21%) não têm condições de comprar alimento em quantidades suficientes.
                        </li>
                        <li>
                            19 milhões (9%) passam fome.
                        </li>
                         <li>*
                            Fonte: Rede Brasileira de Pesquisa em Soberania e Segurança Alimentar e Nutricional (Rede Penssan)
                        </li>
                    </ul>
            </section>  
            <Footer />
        </div>
    )
}

export default Home