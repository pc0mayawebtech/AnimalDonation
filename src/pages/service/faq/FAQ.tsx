import './FAQ.css';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FAQData } from '../../../constant/FAQ';
import { useState } from 'react';

const FAQ = () => {
    const [selectedId, setSelectedId] = useState<number>();

    const handleClick = (id: number) => {
        setSelectedId(selectedId === id ? -1 : id);
    };

    return (
        <>
            {FAQData.map((item, id) => (
                <div key={id}>
                    <section className='FAQ mb-3' onClick={() => handleClick(id)}>
                        <div className='outerWrapperBox'>
                            {selectedId === id ? (
                                <IoIosArrowDown className='faqicon' />
                            ) : (
                                <MdArrowForwardIos className='faqicon' />
                            )}
                            <span className='faqInnerTitle'>{item.title}</span>
                        </div>
                    </section>
                    {selectedId === id && (
                        <section className='faqOuterLayer mb-4'>
                            <p className='faqAnswer'>{item.description}</p>
                        </section>
                    )}
                </div>
            ))}
        </>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
