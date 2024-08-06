import './Team.css';
import { ServiceTeam } from '../../../constant/ServiceTeam';
const Team = () => {
    return (
        <>
            {
                ServiceTeam.map((item, index) => {
                    return (
                        <div className="col-lg-4 mb-5" key={index}>
                            <div className="container">
                                <div className='outerLayer'>
                                    <div className="innerIcon animationFloat">
                                        <div className="iconLayer">
                                            <img src={item.image} alt="team1" className='teamlogo' />
                                        </div>
                                        <div className='iconBoxBodys'>
                                            <h2 className='innerIconTitle mb-3'>{item.title}</h2>
                                            <p className='innerIconCont mb-4'>{item.description}</p>
                                            <p className='extraRead'>Read More</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Team;