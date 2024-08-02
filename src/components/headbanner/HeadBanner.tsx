import './HeadBanner.css';

export interface UserProps {
    value: string;
}

const HeadBanner = ({ value }: UserProps) => {
    return (
        <section className='contactForm mb-5'>
            <div className='helpLineOverlay'></div>
            <div className="container-fluid">
                <div>
                    <h1 className='mainBanner'>{value}</h1>
                </div>
            </div>
        </section>
    )
}

export default HeadBanner