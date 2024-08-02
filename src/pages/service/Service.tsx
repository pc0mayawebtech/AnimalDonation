import { useEffect } from 'react';
import HeadBanner from '../../components/headbanner/HeadBanner';
import Header from '../../components/header/Header';
import './Service.css';

const Service = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <HeadBanner value="Services" />

            <section className='exploreTeam mb-5'>
                <div className="container">
                    <div>
                        <h2 className='teamInnerHead'>Meet Our Veterna Team</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service