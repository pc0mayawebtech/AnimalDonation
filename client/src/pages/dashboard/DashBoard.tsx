import "./DashBoard.css";
import { IoMdContact } from "react-icons/io";
import dashlogo from '../../assets/Images/animalveternalogo.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardPage = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    console.log('heytoken', token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const [dbData, setDBData] = useState([]);
    const [isView, setIsView] = useState(false);

    const sendData = (text) => {
        return navigate('/description', { state: { text } });
    }

    const getAPIData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/dashboard');
            setDBData(response.data.users);
            console.log('dbData', response.data.users);
        } catch (error) {
            console.log('dbError', error);
        }
    };

    useEffect(() => {
        getAPIData();
    }, []);

    const renderCellContent = (text) => {
        const truncatedText = text.length > 10 ? text.substring(0, 10) + "..." : text;
        console.log(text.length, truncatedText);

        return (
            <>
                {truncatedText}
                {text.length > 10 && <span className="read-more" onClick={() => sendData(text)}> Read more</span>}
            </>
        );
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <label className="profile">
                    <img src={dashlogo} alt="dashlogo" />
                </label>
                <div className={`innerService ${isView && 'bordActive'}`}>
                    <span onClick={() => setIsView(!isView)}>Contact</span>
                    <IoMdContact className="iconLogo" />
                </div>
            </aside>
            <main className="main-content">
                <div className="cover-photo">
                    <button className="change-cover" onClick={() => {
                        localStorage.removeItem('token');
                        navigate('/login');
                    }}>Logout</button>
                </div>
                <div className="dashboard">
                    <div className="dashboard-header">
                        <h1 className="mainHeading">Contact Dashboard</h1>
                    </div>

                    {isView && (
                        <table className="table table-responsive table-striped">
                            <thead>
                                <tr>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Subject</th>
                                    <th className="text-center">yourMessage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbData.map((item) => (
                                    <tr key={item.email}>
                                        <td className="text-center">{item.name}</td>
                                        <td className="text-center">{item.email}</td>
                                        <td className="text-center">{renderCellContent(item.subject)}</td>
                                        <td className="text-center">{renderCellContent(item.yourMessage)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
