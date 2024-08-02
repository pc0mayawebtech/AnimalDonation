import './Footer.css';
import footerlogo from '../../assets/Images/animalveternalogo.png';
import { IoIosArrowForward, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Footer = () => {
    const date = new Date();
    const orgDate = date.getFullYear();
    const [todaydate, setTodayDate] = useState(orgDate);

    useEffect(() => {
        const timer = setInterval(() => {
            setTodayDate(todaydate);
        }, 60000);
        window.scrollTo(0, 0);
        return () => clearInterval(timer);
    }, [todaydate])
    return (
        <>
            <footer className='footerOuterWrapper'>
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <label>
                                        <img src={footerlogo} alt="footerlogo" loading='lazy' className='animalVetranLogo mb-4' />
                                    </label>
                                    <p className='footInnerCont'>Phasellus dui odio, tristique a nisi nec, consequat porttitor velit. Nulla ut ipsum enim. Pellentesque rhoncus sit amet ligula et facilisis. Aliquam nec ante vitae.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <p className='footSubHead'>Quick Links</p>
                                <ul>
                                    <li><Link to="/" className='quickLinkWrap'><IoIosArrowForward style={{ fontSize: "1.1rem" }} /> Home</Link></li>
                                    <li><Link to="/about" className='quickLinkWrap'><IoIosArrowForward style={{ fontSize: "1.1rem" }} /> About</Link></li>
                                    <li><Link to="/" className='quickLinkWrap'><IoIosArrowForward style={{ fontSize: "1.1rem" }} /> Features</Link></li>
                                    <li><Link to="/service" className='quickLinkWrap'><IoIosArrowForward style={{ fontSize: "1.1rem" }} /> Services</Link></li>
                                    <li><Link to="/contact" className='quickLinkWrap'><IoIosArrowForward style={{ fontSize: "1.1rem" }} /> Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3">
                                <p className='footSubHead'>Contact Us</p>
                                <ul>
                                    <li><Link to="https://www.google.com/maps/search/A-44,+Sector+-2,+Noida-201301+Uttar+Pradesh/@28.5867058,77.2694719,12z/data=!3m1!4b1?entry=ttu" className='quickLinkWrap'><FaLocationDot style={{ fontSize: "1.1rem" }} /> A-44, Sector-2, Noida-201301 Uttar Pradesh</Link></li>
                                    <li><Link to="tel:+91-9799104489" inputMode='numeric' className='quickLinkWrap'><IoCall style={{ fontSize: "1.1rem" }} /> +91-9799104489</Link></li>
                                    <li><Link to="tel:0120-4158051" inputMode='numeric' className='quickLinkWrap'><IoCall style={{ fontSize: "1.1rem" }} /> 0120-4158051</Link></li>
                                    <li><Link to="mailto:info@mayawebtech.com" className='quickLinkWrap'><IoIosMail style={{ fontSize: "1.1rem" }} /> info@mayawebtech.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <span className='copyrightContent'>Copyright {todaydate} © All Right Reserved Design by Pawan Rikhari</span>
            </div>
        </>
    )
}

export default Footer