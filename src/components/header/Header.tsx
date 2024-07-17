import './Header.css';
import logo from '../../assets/Images/animalveternalogo.png';

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
                            <li>Home</li>
                            <li>
                                About
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                </ul>
                            </li>
                            <li>
                                Features
                                <ul>
                                    <li>Donations</li>
                                    <li>Adoptation</li>
                                    <li>Team</li>
                                </ul>
                            </li>
                            <li>
                                Services
                                <ul>
                                    <li>Services</li>
                                    <li>Service Detail</li>
                                </ul>
                            </li>
                            <li>Contact</li>
                        </ul>
                        <button type="button" className='connectUS'>Connect with us</button>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Header