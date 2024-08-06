import { useEffect } from 'react';
import Header from '../../components/header/Header';
import './About.css';
import aboutlogo from '../../assets/Images/aboutanimal.png';
import aboutsig from '../../assets/Images/aboutsignature.png';
import Footer from '../../components/footer/Footer';
import News from './news/News';
import resucelogo from '../../assets/Images/rescuepeople.jpg';
import HeadBanner from '../../components/headbanner/HeadBanner';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Header />
            <HeadBanner>
                <h1 className='mainBanner'>About us</h1>
            </HeadBanner>

            <section className='heroBanner mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <img src={aboutlogo} alt="aboutlogo" className='w-100' />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h2 className='heroBanerHead mb-4'>We Educate With All Our Heart</h2>
                                <p className='heroBannerCont'>Nullam ex dui, rutrum in pellentesque nec, aliquet et nisi. Sed non magna non odio dignissim consequat. Suspendisse id volutpat est. Ut interdum, enim vitae dictum placerat, nulla nisl cursus lacus, iaculis tristique quam mi eget metus. Nulla lacinia ligula ligula, a hendrerit lorem convallis vitae. Fusce mattis augue eu est pretium, eu consectetur mauris porta.</p>
                                <p className='heroBannerCont mb-5'>Donec suscipit porta felis et aliquam. Pellentesque consequat magna ac convallis mattis. Vivamus at mollis massa, aliquet faucibus turpis. Donec vulputate tempus nisi, nec laoreet sapien laoreet sit amet. Sed condimentum diam quis feugiat tincidunt. In congue mattis eros ut lacinia. Quisque blandit finibus dolor ac ultricies. Nulla condimentum mattis rutrum.</p>
                            </div>
                            <div>
                                <label>
                                    <img src={aboutsig} alt="aboutsig" className='w-50 mb-3' />
                                </label>
                                <p className='aboutInnerHead'>Scoot William</p>
                                <p className='aboutFounder'>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='FoundationAbt mb-5'>
                <div className="container">
                    <div>
                        <h2 className='rescueTeamHead'>Who is Veterna Rescue Foundation?</h2>
                        <img src={resucelogo} alt="resucelogo" className='rescueanimallogo' />
                    </div>
                    <div>
                        <p className='infoRescueAnimal'>We are a group of friends who are actively working for large animals, We initially started to save the birds during the kite festival in Ahmedabad in the year 2009. As it was just starting, we worked with many NGOs and Groups who were existed, we were not having proper knowledge during those days. After time passes, we were having expertise on how to rescue birds and animals, very slowly we started to rescue birds on our own, then we also started rescuing reptiles but due to forest permission, nowadays we are not rescuing wild animals and reptiles.</p>
                        <p className='infoRescueAnimal'>We are also doing such awareness camps in the schools during kite festivals to create awareness in the new generation. So that at least the new generation can aware that how the other speechless birds and animals are suffering.</p>
                        <p className='infoRescueAnimal'>We also actively doing an anti-rabies vaccination camp in Villages to protect animals against rabbis and other diseases.</p>
                        <p className='infoRescueAnimal'>Last time we did a rabies vaccination camp at Pavagadh hill station where we examined more than 300 Donkeys for their health check-up and given basic treatment and medicine with Anti rabies vaccination and a Deworming tablet.</p>
                        <p className='infoRescueAnimal'>All Members of the 4Leg Rescue Foundation are working professionals, each member is doing their job in their respective fields. After their job hours, they are dedicatedly spending their valuable time to save speechless animals. </p>
                        <p className='infoRescueAnimal'>Initially, we were only two who started this activity, but after watching our dedication and love towards animal’s people started joining us, like my friend is doing such a great cause then why I can’t? And today we are more than 15 members of the 4Leg Rescue Foundation.</p>
                        <p className='infoRescueAnimal'>It is just like “लोग मिलते गए कारवां बनता गया”.</p>
                    </div>
                </div>
            </section>

            <section className='FoundationAbt mb-5'>
                <div className="container">
                    <div>
                        <h2 className='rescueTeamHead'>What is motive of Veterna Rescue Foundation?</h2>
                        <img src={resucelogo} alt="resucelogo" className='rescueanimallogo' />
                    </div>
                    <div>
                        <p className='infoRescueAnimal'>“Where nobody can go; 4Leg Rescue will available anyhow”.</p>
                        <p className='infoRescueAnimal'>Focus of Our Group is to make animals/birds pain-free. Initially, we were rescuing birds too, but many NGOs and groups in our city are actively working for small animals like dog, cat, monkey, etc, but for large animals like cow, camel, buffalo there are fewer NGOs working because they require many staff members to handle large animals and in fact also require large space to give them proper treatment. So, we started differently and started helping large animals.  We have also experienced members to rescue large animals as well as we have designed an ambulance to rescue large animals with less pain which names as Garuda. So Large animals can also get better treatments and life.</p>
                    </div>
                </div>
            </section>

            <section className='ReadNews mb-5'>
                <div className="container">
                    <div>
                        <h2 className='innerTitle mb-5'>Read Our News</h2>
                    </div>
                    <div className='row'>
                        <News />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About