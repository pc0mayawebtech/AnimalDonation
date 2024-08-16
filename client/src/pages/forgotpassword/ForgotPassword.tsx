import { useState } from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const notify = () => toast.success('Please check your email', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        const errorNotify = () => toast.error('something is wrong', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        e.preventDefault();
        let flag = true;
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            flag = false;
            return;
        }


        if (flag) {
            try {
                const response = await axios.post('http://localhost:8000/forgot-password', {
                    email: email,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log(response.data);
                console.log(`Password reset link sent to ${email}`);
                notify();
                setEmail('');
                setError('');
                navigate('/login');
            } catch (error) {
                console.log("error in forgetPassword", error);
                errorNotify();
            }
        }
        else {
            console.log('something is wrong');
            setError('');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-card">
                <h2 className="forgot-password-title">Forgot Password?</h2>
                <p className="forgot-password-subtitle">
                    No worries! Enter your email, and we'll send you a reset link.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="forgot-password-input"
                    />
                    {error && <p className="forgot-password-error">{error}</p>}
                    <button type="submit" className="forgot-password-button">
                        Send Reset Link
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ForgotPassword;
