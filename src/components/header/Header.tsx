import './Header.css';
import logo from '../../assets/Images/animalveternalogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section>
            <header className='headerOuter'>
                <nav className='container'>
                    <div className="navWrapper">
                        <label>
                            <Link to="/"><img src={logo} alt="logo" className='verternalogo' /></Link>
                        </label>
                        <ul>
                            <li><Link to="/" className='subModule'>Home</Link></li>
                            <li><Link to="/about" className='subModule'>
                                About
                            </Link>
                            </li>
                            <li>Features
                                <ul>
                                    <li><Link to="/adoption" className='innerSubModule'>Adoptions</Link></li>
                                    <li><Link to="/team" className='innerSubModule'>Team</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/service" className='subModule'>
                                Services
                            </Link>
                            </li>
                            <li><Link to="/contact" className='subModule'>Contact</Link></li>
                        </ul>
                        <button type="button" className='connectUS'>Connect with us</button>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Header