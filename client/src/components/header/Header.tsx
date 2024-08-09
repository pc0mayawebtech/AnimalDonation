import './Header.css';
import { useRef, useState } from 'react';
import logo from '../../assets/Images/animalveternalogo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
    const navRef = useRef<HTMLUListElement>(null);
    const [showFeatures, setShowFeatures] = useState(false);

    const toggleNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("showNav");
        }
    };

    const toggleFeatures = () => {
        setShowFeatures(prev => !prev);
    };

    return (
        <section>
            <header className='headerOuter'>
                <nav className='container'>
                    <div className="navWrapper">
                        <Link to="/"><img src={logo} alt="logo" className='verternalogo' /></Link>
                        <ul ref={navRef}>
                            <li><Link to="/" className='subModule'>Home</Link></li>
                            <li><Link to="/about" className='subModule'>About</Link></li>
                            <li onClick={toggleFeatures} className='features'>
                                Features
                                {showFeatures && (
                                    <ul>
                                        <li><Link to="/adoption" className='innerSubModule'>Adoptions</Link></li>
                                        <li><Link to="/team" className='innerSubModule'>Team</Link></li>
                                    </ul>
                                )}
                                {showFeatures && (
                                    <ol className='mobilePurpose'>
                                        <li><Link to="/adoption" className='mobileSubModule'>Adoptions</Link></li>
                                        <li><Link to="/team" className='mobileSubModule'>Team</Link></li>
                                    </ol>
                                )}
                            </li>
                            <li><Link to="/service" className='subModule'>Services</Link></li>
                            <li><Link to="/contact" className='subModule'>Contact</Link></li>
                            <span className='iconCross' onClick={toggleNavbar}><RxCross1 /></span>
                        </ul>
                        <span className='menuBurger' onClick={toggleNavbar}><GiHamburgerMenu /></span>
                        <button type="button" className='connectUS'>Connect with us</button>
                    </div>
                </nav>
            </header>
        </section>
    );
};

export default Header;
