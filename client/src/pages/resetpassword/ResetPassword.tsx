import { useState } from 'react';
import './ResetPassword.css';

type Errors = {
    password?: string;
    confirmPassword?: string;
};

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<Errors>({});

    const validatePassword = (password: string) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return re.test(password);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let flag = true;
        const validationErrors: Errors = {};

        if (!password) {
            validationErrors.password = "Password should not be empty.";
            flag = false;
        } else if (!validatePassword(password)) {
            validationErrors.password = "Password must be at least 8 characters long, with an uppercase letter, a lowercase letter, a number, and a special character.";
            flag = false;
        }

        if (!confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password should not be empty.";
            flag = false;
        } else if (!validatePassword(confirmPassword)) {
            validationErrors.confirmPassword = "Confirm Password must meet the same criteria as the password.";
            flag = false;
        } else if (password !== confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match.";
            flag = false;
        }

        if (flag) {
            console.log('Password has been reset.');
        }
        else {
            setErrors(validationErrors);
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
        </div>
    );
};

export default ResetPassword;
