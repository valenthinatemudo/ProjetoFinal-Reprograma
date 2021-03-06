import Menu from "../../components/Menu/Menu"
import Footer from '../../components/Footer/Footer'
import AutoraImagem from '../../assets/autora-image.jpg'
import './autora.styles.css'
import { DiGithubAlt } from "react-icons/di" 
import { DiHtml5 } from "react-icons/di" 
import { DiCss3 } from "react-icons/di" 
import { DiJsBadge } from "react-icons/di" 
import { DiReact } from "react-icons/di" 
import { FaLinkedin } from 'react-icons/fa'
import RedeSocial from '../../assets/social.svg'
import Skills from '../../assets/skill.svg'

const Autora = () => {
    return (
        <div className="div-autora">
            <Menu />
            <h1 className='titulo-autora'>Sobre a Autora</h1>
            <img className='foto-autora' src={AutoraImagem} 
            alt='foto da autora'/>
            <p className='paragrafo-autora'>Me chamo Valenthina Temudo, tenho 25 anos e sou recifense. Sou nutricionista de formação e desenvolvedora front-end formada pelo bootcamp "Todas Em Tech - Turma 13" da reprograma. Embora tenha cursado nutrição e trabalhado na área, não me encontrei na profissão e decidi seguir meu coração e apreender minha segunda paixão, a tecnologia. Descobri então no front-end uma oportunidade de recomeço e desde então busco me aperfeiçoar e estudar todos os dias para atingir meus objetivos.</p>
           <section className="section-skills-redes">
           <section className="skills-container">
           <img className='icon-skill' src={Skills} 
                alt='icone programando'/>
                <div>
                <p className="descricao">Tecnologias que domino:</p>
                <div className="skills-box">
                    <p className="front-end">Front-End</p>
                        <i>
                            <DiHtml5  size={40} />
                            <DiCss3  size={40} />
                            <DiJsBadge  size={40} />
                            <DiReact  size={40} />
                        </i>
                </div>
                </div>
            </section>
            <section className="section-redes">
                <img className='icon-redes' src={RedeSocial} 
                alt='icone rede social'/>
                <div>
                    <p className="paragrafo-redes">Minhas redes sociais:</p>
                    <a            className='link-github'          href="https://github.com/valenthinatemudo">
                    <DiGithubAlt size={40}/>
                    </a>
                    <a className='link-linkedin' 
                    href="https://www.linkedin.com/in/valenthina-temudo/">
                    <FaLinkedin size={40}/>
                    </a>
                </div>
            </section>
           </section>
            <Footer />
        </div>
    )
}

export default Autora