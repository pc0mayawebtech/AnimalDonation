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
                            <img src={logo} alt="logo" className='verternalogo' />
                        </label>
                        <ul>
                            <li><Link to="/" className='subModule'>Home</Link></li>
                            <li><Link to="/about" className='subModule'>
                                About
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                </ul>
                            </Link>
                            </li>
                            <li>
                                Features
                                <ul>
                                    <li>Donations</li>
                                    <li>Adoptation</li>
                                    <li>Team</li>
                                </ul>
                            </li>
                            <li><Link to="/service" className='subModule'>
                                Services
                                <ul>
                                    <li>Services</li>
                                    <li>Service Detail</li>
                                </ul>
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