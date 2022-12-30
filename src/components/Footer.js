
import linkedin2 from '../assets/img/linkedin2.png';
import gmail from '../assets/img/gmail.png';
import github1 from '../assets/img/github1.png';

export const Footer = () => {
  return (
    <footer className="footer">
            <div className="social-icon1">
            <a className='linkedinlogo' href="https://www.linkedin.com/in/gustavo-ramos-full-stack/"><img src={linkedin2} alt="linkedin" /></a>
                <a href="mailto:ramosgustavodev@gmail.com"><img src={gmail} alt="gmail" /></a>
                <a href="https://github.com/RamosGustavo"><img src={github1} alt="github" /></a>
            </div>
            <p>Created by: Gustavo Ramos / Full Stack developer.</p>
    </footer>
  )
}
