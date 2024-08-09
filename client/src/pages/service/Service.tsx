import { useEffect } from 'react';
import HeadBanner from '../../components/headbanner/HeadBanner';
import Header from '../../components/header/Header';
import './Service.css';
import Footer from '../../components/footer/Footer';
import Team from './serviceteam/Team';
import faqlogo from '../../assets/Images/faqlogo.jpg';
import petinsurance from '../../assets/Images/petinsurance.png';
import FAQ from './faq/FAQ';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <HeadBanner>
                <h1 className='mainBanner'>Services</h1>
            </HeadBanner>

            <section className='exploreTeam mb-5'>
                <div className="container">
                    <div className='mb-5'>
                        <h2 className='teamInnerHead'>Meet Our Veterna Team</h2>
                        <p className='teamInnerCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='row'>
                        <Team />
                    </div>
                </div>
            </section>

            <section className='clientQuery mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img src={faqlogo} alt="faqlogo" className='logoBody' />
                            </div>
                        </div>
                        <div className="col-lg-6 p-5">
                            <div>
                                <p className='faqTitle'>Clients Inquiries</p>
                                <h2 className='faqSubTitle mb-4'>Related Questions</h2>
                                <p className='faqTitleDes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='petSupport'>
                <div className="container">
                    <div className="premiumInsurance">
                        <div className='innerBoxWrapper'>
                            <label>
                                <img src={petinsurance} alt="petinsurance" />
                            </label>
                            <div>
                                <h2 className='innerHead'>Premium Pet Insurance</h2>
                                <p className='innerCont'>Insurance Includes Free Customer Support</p>
                            </div>
                        </div>
                        <div>
                            <button className='btnStarted' type='submit'>Get Started Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Service