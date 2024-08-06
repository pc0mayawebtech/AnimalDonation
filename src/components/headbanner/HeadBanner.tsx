import { ReactNode } from 'react';
import './HeadBanner.css';

export interface UserProps {
    children?: ReactNode,
}

const HeadBanner = ({ children }: UserProps) => {
    return (
        <section className='contactForm mb-5'>
            <div className='helpLineOverlay'></div>
            <div className="container-fluid">
                {children}
            </div>
        </section>
    )
}

export default HeadBanner;