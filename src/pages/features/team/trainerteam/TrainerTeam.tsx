import './TrainerTeam.css';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export interface UserProps {
    contactbg?: string,
}
const TrainerTeam = ({ contactbg }: UserProps) => {
    return (
        <>
            <div className="col-lg-4 mb-5">
                <div className='contactWay'>
                    <div className={contactbg}>
                        <div className='reachUs'>
                            <div className='iconSocial'>
                                <label className='contactMode mb-2'>
                                    <Link to="/"><FaFacebook className='mediaIcon' /></Link>
                                </label>
                                <label className='contactMode mb-2'>
                                    <Link to='/'><FaInstagram className='mediaIcon' /></Link>
                                </label>
                                <label className='contactMode mb-2'>
                                    <Link to='/'><FaLinkedin className='mediaIcon' /></Link>
                                </label>
                            </div>
                        </div>
                        <div className='logoInfoData'>
                            <h4 className='infoDataHead'>Will Potter</h4>
                            <p className='infoDataCont'>Veterna Leader</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainerTeam;