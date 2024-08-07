import './PetDetail.css';
import { FaCalendarAlt, FaWeight } from "react-icons/fa";
import { petTeam } from '../../../../constant/PetDetail';

const PetDetail = () => {
    return (
        <>
            {
                petTeam.map((item, index) => {
                    return (
                        <div className="col-lg-3 mb-4">
                            <div className='boxcardWrapper' key={index}>
                                <label>
                                    <img src={item.image} alt="petlogo" className='petLogo mb-3' />
                                </label>
                                <div className='innerInfoWrapper mb-4'>
                                    <div className='d-flex align-items-center'>
                                        <FaCalendarAlt className='mx-2' style={{ color: "red" }} /> {item.date} Months
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <FaWeight className='mx-2' style={{ color: "red" }} /> {item.weight} Pounds
                                    </div>
                                </div>
                                <div className='subInfoWrapper mx-2'>
                                    <h4 className='subInnerHead'>{item.name}</h4>
                                    <p className='subInnerCont'>{item.decription}</p>
                                    <p className='moreInfo'>Read More</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PetDetail