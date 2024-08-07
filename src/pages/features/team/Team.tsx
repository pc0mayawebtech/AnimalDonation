import Footer from '../../../components/footer/Footer';
import HeadBanner from '../../../components/headbanner/HeadBanner';
import Header from '../../../components/header/Header';
import ExpertTeam from '../../home/expertteam/ExpertTeam';
import './Team.css';
import TrainerTeam from './trainerteam/TrainerTeam';

const Team = () => {
    return (
        <>
            <Header />
            <HeadBanner>
                <h1 className='mainBanner'>Team</h1>
            </HeadBanner>

            <section className='rescueTeam mb-5'>
                <div className="container">
                    <div>
                        <p className='teamInnerTitle'>Veterna Team</p>
                        <h2 className='teamInnerHead'>Meet Our Veterna Team</h2>
                        <p className='teamInnerCont mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className='row spaceTeam mb-2'>
                        <TrainerTeam contactbg='teamPerson' />
                        <TrainerTeam contactbg='teamPerson' />
                        <TrainerTeam contactbg='teamPerson' />
                    </div>
                    <div className='row spaceTeam'>
                        <TrainerTeam contactbg='teamPerson' />
                        <TrainerTeam contactbg='teamPerson' />
                        <TrainerTeam contactbg='teamPerson' />
                    </div>
                </div>
            </section>

            <section className='volunteerReview mb-0'>
                <div className='helpLineOverlay'></div>
                <div className="container">
                    <div>
                        <p className='volunteerTitle'>What Our Volunteer Said</p>
                        <h2 className='volunteerHead'>Our Volunteer Said</h2>
                        <p className='volunteerCont mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <ExpertTeam />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Team;