import './News.css';
import { ReadNews } from '../../../constant/ReadNews';
const News = () => {
    return (
        <>

            {
                ReadNews.map((item, index) => {
                    return (
                        <div className="col-lg-4 mb-5">
                            <section className='readNews'>
                                <div className="container">
                                    <div className='newsOuterWrapper' key={index}>
                                        <div className="imageBox">
                                            <img src={item.image} alt="animalsave" className='abtSaveAnimal' />
                                        </div>
                                        <div className='outerBoxWrapper'>
                                            <h2 className='subInnerTitle'>{item.title}</h2>
                                            <p className='subInnerCont mb-4'>{item.description}</p>
                                            <button className='btnLearnFurther'>Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </section >
                        </div>
                    )

                })
            }
        </>
    )
}

export default News