import './ExpertTeam.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exportTeam } from '../../../constant/ExpertTeam';

const ExpertTeam = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <>

            <div className="slider-container" >
                <Slider {...settings}>
                    {
                        exportTeam.map((value, index) => {
                            return (
                                <div className='col-lg-4 col-md-12 col-sm-12 col-12 flex-row p-lg-3 p-sm-2' key={index}>
                                    <div className='wrapperLogo'>
                                        <img src={value.image} alt="expertteam" loading='lazy' className='w-100' />
                                    </div>
                                    <div>
                                        <div>
                                            <h4 className='teamName'>{value.name}</h4>
                                            <p className='teamExpertise'>{value.profile}</p>
                                        </div>
                                        <div className='socialMediaHandle'>
                                            <FaFacebookSquare className='socialmediaPlatform' />
                                            <FaSquareXTwitter className='socialmediaPlatform' />
                                            <FaLinkedin className='socialmediaPlatform' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </>
    )
}

export default ExpertTeam;