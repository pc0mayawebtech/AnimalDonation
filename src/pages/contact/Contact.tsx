import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdClock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import './Contact.css';
import { useEffect } from 'react';
import HeadBanner from '../../components/headbanner/HeadBanner';
import Form from './form/Form';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <HeadBanner>
                <h1 className='mainBanner'>Contact us</h1>
            </HeadBanner>

            <section className='heroBanner mb-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='getTouchModule mb-5'>
                                <h2 className='innerHead mb-4'>Get in Touch</h2>
                                <p className='innerCont'>Aenean sollicitudin tempor dui id ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse condimentum leo a augue malesuada, quis placerat libero interdum. Sed ultricies maximus nunc, vel vulputate neque suscipit sed.</p>
                            </div>
                            <div className='row mb-2'>
                                <div className="col-lg-6">
                                    <div className='contactScope'>
                                        <span>
                                            <FaLocationDot className='iconSize' />
                                        </span>
                                        <span>
                                            <h4 className='innerSubTitle'>Location</h4>
                                            <p className='innerSubAddress'>99 Roving St., Big City</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='contactScope'>
                                        <span>
                                            <IoMdClock className='iconSize' />
                                        </span>
                                        <span>
                                            <h4 className='innerSubTitle'>Open Hours</h4>
                                            <p className='innerSubAddress'>Mon - Sat 08 : 17</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className="col-lg-6">
                                    <div className='contactScope'>
                                        <span>
                                            <MdEmail className='iconSize' />
                                        </span>
                                        <span>
                                            <h4 className='innerSubTitle'>Email</h4>
                                            <p className='innerSubAddress'>hello@awesomesite.com</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='contactScope'>
                                        <span>
                                            <FaPhoneAlt className='iconSize' />
                                        </span>
                                        <span>
                                            <h4 className='innerSubTitle'>Phone</h4>
                                            <p className='innerSubAddress'>+123-234-1234</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className='socialIconHead mb-3'>Social Media :</h4>
                                <span className='SocialWrapper'>
                                    <FaFacebook className='socialHandleIcon' />
                                    <FaSquareXTwitter className='socialHandleIcon' />
                                    <FaLinkedin className='socialHandleIcon' />
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='mb-4'>
                                <h2 className='formInnerHead mb-4'>Leave a Message</h2>
                                <p className='formInnerCont'>Duis lorem tortor, iaculis at dolor ac, lacinia elementum est. Nulla commodo neque id neque tincidunt fringilla vel in ipsum.</p>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

            <section className='locationOffice mb-0'>
                <iframe className='innerLocationData' loading="lazy" src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Noida Address" aria-label="true"></iframe>
            </section>
            <Footer />
        </>
    )
}

export default Contact;