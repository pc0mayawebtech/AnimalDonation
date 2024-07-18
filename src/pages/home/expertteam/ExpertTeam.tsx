import './ExpertTeam.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logo from '../../../assets/Images/expertteam.png';

const ExpertTeam = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className='wrapperLogo'>
                    <img src={logo} alt="expertteam" loading='lazy' />
                </div>
                <div>
                    <h4 className='teamName'>Anita Jerome</h4>
                    <p className='teamExpertise'>Certified Dog Behaviourist</p>
                </div>
                <div className='socialMediaHandle'>
                    <FaFacebookSquare className='socialmediaPlatform' />
                    <FaSquareXTwitter className='socialmediaPlatform' />
                    <FaLinkedin className='socialmediaPlatform' />
                </div>
            </div>
        </>
    )
}

export default ExpertTeam;