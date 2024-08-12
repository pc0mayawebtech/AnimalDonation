import './Description.css';
import { useLocation } from "react-router-dom";

const DescriptionPage = () => {
    const location = useLocation();
    const { text } = location.state || {};

    return (
        <div className='container-fluid'>
            <div className='mt-4'>
                <h1 className='mainHeadTitle'>Full Description</h1>
                <p className='textValue'>{text}</p>
            </div>
        </div>
    );
};

export default DescriptionPage;
