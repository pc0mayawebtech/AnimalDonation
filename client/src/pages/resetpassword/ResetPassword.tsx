import { useState } from 'react';
import './ResetPassword.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Errors = {
    password?: string;
    confirmPassword?: string;
};

const ResetPassword = () => {
    const navigate = useNavigate();
    const { id, token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Errors>({});

    const validatePassword = (password: string) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return re.test(password);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let isValid = true;
        const validationErrors: Errors = {};

        if (!password) {
            validationErrors.password = "Password should not be empty.";
            isValid = false;
        } else if (!validatePassword(password)) {
            validationErrors.password = "Password is not strong enough.";
            isValid = false;
        }

        if (!confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password should not be empty.";
            isValid = false;
        } else if (password !== confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match.";
            isValid = false;
        }

        if (isValid) {
            console.log(id, token)
            try {
                const response = await axios.post(`http://localhost:8000/reset-password/${id}/${token}`, {
                    password: password,
                });
                console.log('pawan', response.data);
                toast.success('Password reset successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
                setPassword('');
                setConfirmPassword('');
                setErrors({});
                navigate('/login');

            } catch (error) {
                console.error("Error in resetting password", error);
                toast.error('Something went wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    pauseOnHover: true,
                });
            }
        } else {
            setErrors(validationErrors);
            console.log("Validation errors in reset password");
        }
    };

    return (
        <div className="reset-password-container">
            <div className="reset-password-card">
                <h2 className="reset-password-title">Reset Your Password</h2>
                <p className="reset-password-subtitle">
                    Create a new password for your account.
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="reset-password-label" htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="reset-password-input"
                    />
                    {errors.password && <p className="reset-password-error">{errors.password}</p>}
                    <label className="reset-password-label" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="reset-password-input"
                    />
                    {errors.confirmPassword && <p className="reset-password-error">{errors.confirmPassword}</p>}
                    <button type="submit" className="reset-password-button">
                        Reset Password
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResetPassword;
