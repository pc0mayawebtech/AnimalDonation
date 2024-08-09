import HeadBanner from '../../../components/headbanner/HeadBanner';
import Header from '../../../components/header/Header';
import { FaCalendarAlt, FaWeight } from "react-icons/fa";
import './Adoption.css';
import { birdTeam } from '../../../constant/birdDetail';
import PetDetail from './petdetails/PetDetail';
import adoptanimal from '../../../assets/Images/adoptanimal1.png';
import adoptanima2 from '../../../assets/Images/adoptanimal2.png';
import adoptanima3 from '../../../assets/Images/adoptanimal3.png';
import adoptanima4 from '../../../assets/Images/adoptanimal4.png';
import Footer from '../../../components/footer/Footer';

const Adoption = () => {
    return (
        <>
            <Header />
            <HeadBanner>
                <h1 className='mainBanner'>Adoption</h1>
            </HeadBanner>

            <section className='Adoption mb-5'>
                <div className="container">
                    <div className='outerTextWrapper mb-5'>
                        <p className='innerBoxTitle'>Meet The Animals</p>
                        <h2 className='innerBoxHead'>Waiting For Adoption</h2>
                        <p className='innerBoxCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className='row'>
                        <PetDetail />
                    </div>
                </div>
            </section>

            <section className='birdPet mb-5'>
                <div className="container">
                    <div className="row">
                        {
                            birdTeam.map((item, id) => {
                                return (
                                    <div className="col-lg-6" style={{ marginBottom: "29rem" }}>
                                        <div className='elementWrapper' key={id}>
                                            <div className="backgroundOverlay">
                                                <div className='InfoWrapper mb-3'>
                                                    <div className='d-flex align-items-center'>
                                                        <FaCalendarAlt className='mx-2' style={{ color: "red" }} />
                                                        <span className='backInfoColor'>{item.date} Months</span>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <FaWeight className='mx-2' style={{ color: "red" }} />
                                                        <span className='backInfoColor'>{item.weight} Pounds</span>
                                                    </div>
                                                </div>
                                                <div className='innerSubInfoWrapper'>
                                                    <h4 className='wrapperTitle'>{item.name}</h4>
                                                    <p className='wrapperContent'>{item.decription}</p>
                                                    <p className='moreread'>Read More</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section className='adoptAnimal'>
                <HeadBanner>
                    <div>
                        <p className='innerAdoptInfo'>How To Adopt</p>
                        <h2 className='innerAdoptHead'>How To Adopt Animals</h2>
                        <p className='innerAdoptCont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="container">
                        <div className='row'>
                            <div className="col-lg-3">
                                <label className='iconStyles'>
                                    <img src={adoptanimal} alt="adoptanimal1" />
                                </label>
                                <div>
                                    <h4 className='subInnerHead'>Select Your Animals</h4>
                                    <p className='subInnerCont'>Lorem ipsum dolor sit amet consecte.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className='iconStyles'>
                                    <img src={adoptanima2} alt="adoptanimal2" />
                                </label>
                                <div>
                                    <h4 className='subInnerHead'>Select Your Animals</h4>
                                    <p className='subInnerCont'>Lorem ipsum dolor sit amet consecte.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className='iconStyles'>
                                    <img src={adoptanima3} alt="adoptanimal3" />
                                </label>
                                <div>
                                    <h4 className='subInnerHead'>Select Your Animals</h4>
                                    <p className='subInnerCont'>Lorem ipsum dolor sit amet consecte.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className='iconStyles'>
                                    <img src={adoptanima4} alt="adoptanimal4" />
                                </label>
                                <div>
                                    <h4 className='subInnerHead'>Select Your Animals</h4>
                                    <p className='subInnerCont'>Lorem ipsum dolor sit amet consecte.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </HeadBanner>
            </section>
            <Footer />
        </>
    )
}

export default Adoption;