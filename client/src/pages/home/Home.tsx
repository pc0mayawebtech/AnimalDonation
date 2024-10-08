import './Home.css';
import Header from '../../components/header/Header';
import rescuelogo from '../../assets/Images/animalrescue.jpg';
import accordianlogo from '../../assets/Images/accordianlogo.jpg';
import { FaCheckCircle } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { data } from '../animalrescue';
import rescuehome from '../../assets/Images/animalhome.png';
import puupylogo from '../../assets/Images/choosepuppylogo.jpg';
import ExpertTeam from './expertteam/ExpertTeam';
import Footer from '../../components/footer/Footer';
import FAQ from '../service/faq/FAQ';
import CountUp from 'react-countup';

const Home = () => {
    return (
        <>
            <Header />
            <section className='elementor-top-section mb-5'>
                <div className='heroBannerLogo'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className='innerContentPart'>
                                    <p className='welcomePhrase'>WELCOME TO DOGGIE</p>
                                    <h1 className='petBehaviour'>Make Your Pet <span className='innerPetBehaviour'>Friendly</span></h1>
                                    <p className='aboutAnimalInfo'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis lorem tortor, iaculis at dolor ac.</p>
                                    <button className='readExtraInfo'>Read More</button>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='animalRescuePlan mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className='rescueDescription'>
                                <p className='aboutInfo'>About Veterna</p>
                                <h2 className='trustedWord mb-4'>We're The World's Most Trusted Animal Rescue</h2>
                                <p className='briefAbtInfo mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                            </div>
                            <div>
                                <div className="row mb-5">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul className='elementoryrescue'>
                                            {
                                                data.slice(0, 5).map((item, id) => {
                                                    return (
                                                        <li key={id} className='innerelementoryrescueWrapper'>
                                                            <span className='checkMark'>
                                                                <FaCheckCircle />
                                                            </span>
                                                            <span className='rescueTitle'>{item.title}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul className='elementoryrescue'>
                                            {
                                                data.slice(5, 10).map((item, id) => {
                                                    return (
                                                        <li key={id} className='innerelementoryrescueWrapper'>
                                                            <span className='checkMark'>
                                                                <FaCheckCircle />
                                                            </span>
                                                            <span className='rescueTitle'>{item.title}</span>
                                                        </li>
                                                    )

                                                })
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                                        <div className='successRate'>
                                            <div className='fun-fact-inner'>
                                                <img src={rescuehome} alt="rescuehome" loading='lazy' className='animalresuceHome' />
                                                <div className='contentbox'>
                                                    <div className='number-wrapper'>
                                                        <CountUp className='mx-1' start={0} end={1020} duration={10} enableScrollSpy={true} scrollSpyOnce={true} />
                                                        <span className='incremnetRescue'>+</span>
                                                    </div>
                                                    <h2 className='contentTitle'>Successful Rescue</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1 mb-4">
                            <div>
                                <img src={rescuelogo} alt="animalrescuelogo" loading='lazy' className='animalrescueRightLogo' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='animalHelpline mb-5'>
                <div className="helpLineoverlay"></div>
                <div className="container">
                    <div className='innerBoxWrapper'>
                        <p className='infoCare'>Let's Care For Each Other</p>
                        <h2 className='infoHeadContact mb-4'>Contact Us If You Find Abandoned Animals</h2>
                        <p className='infoabtrecoveranimal mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='mainContacthelpline mt-5'><IoCall className='callIcon' />(+91) 8152254239</button>
                    </div>
                </div>
            </section>

            <section className='whyChooseUs mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img src={puupylogo} alt="dogcatlogo" loading='lazy' className='chooseuspuupy mb-4' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h2 className='innerHead mb-4'>Why Choose Us</h2>
                                <p className='innerCont mb-4'>Duis lorem tortor, iaculis at dolor ac, lacinia elementum est. Nulla commodo neque id neque tincidunt fringilla vel in ipsum.</p>
                            </div>
                            <ul className='outerSpace mb-5'>
                                <li className='innerdescription mb-4'>
                                    <span className='checkboxlogo'><FaCheckCircle /></span>
                                    <span className='descriptionCont'>We Succeeded in The Mental Formation of Pets.</span>
                                </li>
                                <li className='innerdescription mb-4'>
                                    <span className='checkboxlogo'><FaCheckCircle /></span>
                                    <span className='descriptionCont'>We Succeeded in The Mental Formation of Pets.</span>
                                </li>
                                <li className='innerdescription mb-4'>
                                    <span className='checkboxlogo'><FaCheckCircle /></span>
                                    <span className='descriptionCont'>We Succeeded in The Mental Formation of Pets.</span>
                                </li>
                                <li className='innerdescription mb-4'>
                                    <span className='checkboxlogo'><FaCheckCircle /></span>
                                    <span className='descriptionCont'>We Succeeded in The Mental Formation of Pets.</span>
                                </li>
                            </ul>
                            <button type='button' className='readExtrabtn'>Read More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='accordian mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img src={accordianlogo} alt="accordianlogo" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h2 className='faqTitle mb-4'>Frequently Asked Question</h2>
                                <p className='faqCont mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti facilis sit officia earum illo nostrum veritatis corporis nesciunt eligendi reiciendis id nobis maiores reprehenderit aspernatur.</p>
                            </div>
                            <div>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ExpertTeam mb-5'>
                <div className="container">
                    <div>
                        <h2 className='teamHead mb-4'>Meet a Friendly Team</h2>
                        <p className='teamCotent mb-5'>Cras dictum ut libero non ultricies. Morbi luctus lacus ac finibus porttitor. Cras pellentesque, sapien in rhoncus iaculis, eros nisl elementum ipsum, nec faucibus magna elit at quam.</p>
                    </div>
                    <div className='row'>
                        <ExpertTeam />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default Home;